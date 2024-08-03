const blastanium = Item("compound")

// Vanilla Turrets Compatibility
const compoundBulletSpectre = extend(FlakBulletType, {
    speed: 4,
    lifetime: 55,
    damage: 85,
    shootEffect: Fx.shootBig,
    ammoMultiplier: 2,
    splashDamage: 27,
    splashDamageRadius: 50,
    collidesGround: true,
    status: StatusEffects.blasted,
    statusDuration: 120,
    fragBullet: extend(BasicBulletType, {
        speed: 2.5,
        damage: 5,
        sprite: "bullet",
        width: 10,
        height: 12,
        shrinkY: 1,
        lifetime: 20,
        backColor: Color.valueOf("7f7f7f"),
        frontColor: Color.valueOf("c8ff00"),
        despawnEffect: Fx.none
    })
});

const compoundBulletSalvo = extend(FlakBulletType, {
    speed: 4,
    lifetime: 60,
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
        lifetime: 20,
        backColor: Color.valueOf("7f7f7f"),
        frontColor: Color.valueOf("c8ff00"),
        despawnEffect: Fx.none
    })
});

const compoundBulletCyclone = extend(FlakBulletType, {
    speed: 4,
    lifetime: 50,
    damage: 12,
    shootEffect: Fx.shootBig,
    ammoMultiplier: 5,
    splashDamage: 70,
    splashDamageRadius: 65,
    collidesGround: true,
    status: StatusEffects.blasted,
    statusDuration: 120,
    fragBullet: extend(BasicBulletType, {
        speed: 2.5,
        damage: 12,
        sprite: "bullet",
        width: 10,
        height: 12,
        shrinkY: 1,
        lifetime: 20,
        backColor: Color.valueOf("7f7f7f"),
        frontColor: Color.valueOf("c8ff00"),
        despawnEffect: Fx.none
    })
});

const compoundBulletRipple = extend(FlakBulletType, {
    speed: 4,
    lifetime: 65,
    damage: 65,
    shootEffect: Fx.shootBig,
    ammoMultiplier: 2,
    splashDamage: 75,
    splashDamageRadius: 35,
    collidesGround: true,
    status: StatusEffects.blasted,
    statusDuration: 120,
    fragBullet: extend(BasicBulletType, {
        speed: 2.5,
        damage: 20,
        sprite: "bullet",
        width: 10,
        height: 12,
        shrinkY: 1,
        lifetime: 20,
        backColor: Color.valueOf("7f7f7f"),
        frontColor: Color.valueOf("c8ff00"),
        despawnEffect: Fx.none
    })
});

const compoundBulletSwarmer = extend(FlakBulletType, {
    speed: 4,
    lifetime: 55,
    damage: 15,
    shootEffect: Fx.shootBig,
    ammoMultiplier: 5,
    splashDamage: 33,
    splashDamageRadius: 35,
    collidesGround: true,
    status: StatusEffects.blasted,
    statusDuration: 120,
    fragBullet: extend(BasicBulletType, {
        speed: 2.5,
        damage: 14,
        sprite: "bullet",
        width: 10,
        height: 12,
        shrinkY: 1,
        lifetime: 20,
        backColor: Color.valueOf("7f7f7f"),
        frontColor: Color.valueOf("c8ff00"),
        despawnEffect: Fx.none
    })
});


Blocks.salvo.ammoTypes.put(Vars.content.item("blastanium-compound"), compoundBulletSalvo);
Blocks.ripple.ammoTypes.put(Vars.content.item("blastanium-compound"), compoundBulletRipple);
Blocks.cyclone.ammoTypes.put(Vars.content.item("blastanium-compound"), compoundBulletCyclone);
Blocks.spectre.ammoTypes.put(Vars.content.item("blastanium-compound"), compoundBulletSpectre);
Blocks.swarmer.ammoTypes.put(Vars.content.item("blastanium-compound"), compoundBulletSwarmer);
