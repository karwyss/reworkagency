import asyncio
from playwright.async_api import async_playwright
URL = "http://localhost:8000/index.html"
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        errs=[]
        pg = await b.new_page(viewport={"width":1440,"height":900})
        pg.on("console", lambda m: errs.append(f"[{m.type}] {m.text}") if m.type in ("error","warning") else None)
        pg.on("pageerror", lambda e: errs.append(f"[pageerror] {e}"))
        await pg.goto(URL, wait_until="networkidle"); await pg.wait_for_timeout(3600)
        await pg.screenshot(path="/home/user/.shots/d2-hero.png")
        # FAQ: open 2nd, check first closes
        await pg.evaluate("document.querySelector('#faq').scrollIntoView()"); await pg.wait_for_timeout(900)
        summaries = await pg.query_selector_all('.acc summary')
        await summaries[1].click(); await pg.wait_for_timeout(800)
        states = await pg.evaluate("[...document.querySelectorAll('.acc')].map(d=>d.open)")
        print("faq states after opening #2:", states)
        await pg.screenshot(path="/home/user/.shots/d2-faq.png")
        # form: submit empty -> errors
        await pg.evaluate("document.querySelector('#kontakt').scrollIntoView()"); await pg.wait_for_timeout(900)
        await pg.click('.form__submit'); await pg.wait_for_timeout(400)
        inv = await pg.evaluate("[...document.querySelectorAll('.field.is-invalid .field__err')].map(e=>e.textContent)")
        print("validation errors:", inv)
        await pg.screenshot(path="/home/user/.shots/d2-form-err.png")
        # fill & submit (mailto mode → success)
        await pg.fill('#f-name','Karol'); await pg.fill('#f-email','test@example.com'); await pg.select_option('#f-service','Google Ads')
        await pg.click('label.chip:nth-child(2)'); await pg.fill('#f-message','Potrzebuję kampanii Google Ads dla firmy budowlanej.')
        await pg.click('.check'); await pg.click('.form__submit'); await pg.wait_for_timeout(1500)
        print("success visible:", await pg.evaluate("!document.querySelector('#form-success').hidden"))
        await pg.screenshot(path="/home/user/.shots/d2-form-ok.png")
        # data-pick preselect
        await pg.click('#form-again'); await pg.wait_for_timeout(300)
        await pg.evaluate("document.querySelector('[data-pick=\"Rolki / Video\"]').click()"); await pg.wait_for_timeout(300)
        print("preselect:", await pg.evaluate("document.querySelector('#f-service').value"))
        # hover a card + project
        await pg.evaluate("document.querySelector('#realizacje').scrollIntoView()"); await pg.wait_for_timeout(900)
        await pg.hover('.project:nth-child(2) .project__media'); await pg.wait_for_timeout(900)
        await pg.screenshot(path="/home/user/.shots/d2-work-hover.png")
        # mobile
        m = await b.new_page(viewport={"width":390,"height":844}, device_scale_factor=2, is_mobile=True, has_touch=True)
        m.on("pageerror", lambda e: errs.append(f"[m pageerror] {e}"))
        await m.goto(URL, wait_until="networkidle"); await m.wait_for_timeout(2000)
        await m.screenshot(path="/home/user/.shots/m2-hero.png")
        await m.evaluate("window.scrollTo(0, 900)"); await m.wait_for_timeout(900)
        await m.screenshot(path="/home/user/.shots/m2-visual.png")
        await m.evaluate("window.scrollTo(0, 2600)"); await m.wait_for_timeout(900)
        await m.screenshot(path="/home/user/.shots/m2-sticky.png")
        print("sticky visible:", await m.evaluate("document.querySelector('#sticky-cta').classList.contains('is-visible')"))
        await m.click(".burger"); await m.wait_for_timeout(700)
        await m.screenshot(path="/home/user/.shots/m2-menu.png")
        print("sticky hidden while menu open:", not await m.evaluate("document.querySelector('#sticky-cta').classList.contains('is-visible')"))
        sw = await m.evaluate("document.documentElement.scrollWidth"); print("mobile scrollWidth", sw)
        print("\n".join(errs) or "no console errors")
        await b.close()
asyncio.run(main())
