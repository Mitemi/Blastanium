const blastanium = Item("compound")

const compoundBulletSpectre = extend(FlakBulletType, {
    speed: 4,
    damage: 90,
    shootEffect: Fx.shootBig,
    ammoMultiplier: 2,
    splashDamage: 27,
    splashDamageRadius: 50,
    collidesGround: true,
    status: StatusEffects.blasted,
    statusDuration: 120,
    fragBullet: extend(BasicBulletType, {
        speed: 2.5,
        damage: 25,
        sprite: "bullet",
        width: 10,
        height: 12,
        shrinkY: 1,
        lifetime: 15,
        backColor: Color.valueOf("7f7f7f"),
        frontColor: Color.valueOf("c8ff00"),
        despawnEffect: Fx.none
    })
});

const compoundBulletSalvo = extend(FlakBulletType, {
    speed: 4,
    damage: 28,
    shootEffect: Fx.shootBig,
    ammoMultiplier: 5,
    splashDamage: 17,
    splashDamageRadius: 44,
    collidesGround: true,
    status: StatusEffects.blasted,
    statusDuration: 120,
    fragBullet: extend(BasicBulletType, {
        speed: 2.5,
        damage: 8,
        sprite: "bullet",
        width: 10,
        height: 12,
        shrinkY: 1,
        lifetime: 15,
        backColor: Color.valueOf("7f7f7f"),
        frontColor: Color.valueOf("c8ff00"),
        despawnEffect: Fx.none
    })
});

Blocks.salvo.ammoTypes.put(Vars.content.item("blastanium-compound"), compoundBulletSalvo);
Blocks.spectre.ammoTypes.put(Vars.content.item("blastanium-compound"), compoundBulletSpectre);
