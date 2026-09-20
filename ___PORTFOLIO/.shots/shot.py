import asyncio, sys
from playwright.async_api import async_playwright
URL = "http://localhost:8000/index.html"
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        # desktop
        pg = await b.new_page(viewport={"width":1440,"height":900}, device_scale_factor=1)
        errs=[]
        pg.on("console", lambda m: errs.append(f"[{m.type}] {m.text}") if m.type in ("error","warning") else None)
        pg.on("pageerror", lambda e: errs.append(f"[pageerror] {e}"))
        await pg.goto(URL, wait_until="networkidle")
        await pg.wait_for_timeout(1500)
        await pg.screenshot(path="/home/user/.shots/d-hero.png")
        # scroll through to trigger reveals
        h = await pg.evaluate("document.body.scrollHeight")
        y=0
        while y < h:
            await pg.evaluate(f"window.scrollTo(0,{y})"); await pg.wait_for_timeout(120); y+=600
            h = await pg.evaluate("document.body.scrollHeight")
        await pg.evaluate("window.scrollTo(0,0)"); await pg.wait_for_timeout(800)
        await pg.screenshot(path="/home/user/.shots/d-full.png", full_page=True)
        sw = await pg.evaluate("document.documentElement.scrollWidth"); print("desktop scrollWidth", sw)
        # mobile
        m = await b.new_page(viewport={"width":390,"height":844}, device_scale_factor=2, is_mobile=True, has_touch=True)
        await m.goto(URL, wait_until="networkidle"); await m.wait_for_timeout(1500)
        await m.screenshot(path="/home/user/.shots/m-hero.png")
        h = await m.evaluate("document.body.scrollHeight"); y=0
        while y < h:
            await m.evaluate(f"window.scrollTo(0,{y})"); await m.wait_for_timeout(100); y+=500
            h = await m.evaluate("document.body.scrollHeight")
        await m.evaluate("window.scrollTo(0,0)"); await m.wait_for_timeout(600)
        await m.screenshot(path="/home/user/.shots/m-full.png", full_page=True)
        sw = await m.evaluate("document.documentElement.scrollWidth"); print("mobile scrollWidth", sw)
        # find overflow offenders on mobile
        off = await m.evaluate("""() => [...document.querySelectorAll('body *')].filter(e=>{const r=e.getBoundingClientRect();return r.right>window.innerWidth+1}).slice(0,12).map(e=>e.className+' '+Math.round(e.getBoundingClientRect().right))""")
        print("mobile overflow:", off)
        # open menu shot
        await m.click(".burger"); await m.wait_for_timeout(600)
        await m.screenshot(path="/home/user/.shots/m-menu.png")
        print("\n".join(errs) or "no console errors")
        await b.close()
asyncio.run(main())
