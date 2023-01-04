Events.on(ContentInitEvent, e => {
    const p = Vars.content.planet("octavia");
    p.generator = new ErekirPlanetGenerator();
});
