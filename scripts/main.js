const blastanium = Item("compound")

// Vanilla Serpulo Turrets Compatibility
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
    lifetime: 65,
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

const compoundBulletRipple = extend(ArtilleryBulletType, {
    speed: 4,
    lifetime: 55,
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

const compoundBulletSwarmer = extend(MissileBulletType, {
    speed: 4,
    lifetime: 50,
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

// Vanilla Erekir Turrets Compatibility
const compoundBulletScathe = extend(ArtilleryBulletType, {
    speed: 4,
    lifetime: 300,
    Damage: 1000,
    shootEffect: Fx.shootTitan,
    ammoMultiplier: 2,
    splashDamage: 3000,
    splashDamageRadius: 75,
    collidesGround: true,
    status: StatusEffects.blasted,
    statusDuration: 120,
    hitSound: Sounds.titanExplosion,
    fragBullet: extend(BasicBulletType, {
        speed: 2.5,
        damage: 170,
        sprite: "bullet",
        width: 10,
        height: 12,
        shrinkY: 1,
        lifetime: 20,
        backColor: Color.valueOf("7f7f7f"),
        frontColor: Color.valueOf("c8ff00"),
        despawnEffect: Fx.none,
        buildingDamageMultiplier: 0.35
    }),
    buildingDamageMultiplier: 0.35
});

const compoundBulletTitan = extend(ArtilleryBulletType, {
    speed: 4,
    lifetime: 90,
    damage: 0,
    shootEffect: Fx.shootTitan,
    ammoMultiplier: 2,
    splashDamage: 650,
    splashDamageRadius: 75,
    collidesGround: true,
    status: StatusEffects.blasted,
    statusDuration: 120,
    width: 22,
    height: 26,
    scaledSplashDamage: true,
    trailLength: 32,
    trailWidth: 3.35,
    trailSinScl: 2.5,
    trailSinMag: 0.5,
    trailEffect: Fx.none,
    despawnShake: 7,
    knockback: 2,
    hitSound: Sounds.titanExplosion,
    hitEffect: MultiEffect(Fx.titanExplosion, Fx.titanSmoke),
    fragBullet: extend(BasicBulletType, {
        speed: 2.5,
        damage: 50,
        sprite: "bullet",
        width: 10,
        height: 12,
        shrinkY: 1,
        lifetime: 20,
        splashDamage: 50,
        splashDamageRadius: 75,
        backColor: Color.valueOf("7f7f7f"),
        frontColor: Color.valueOf("c8ff00"),
        despawnEffect: Fx.none,
        buildingDamageMultiplier: 0.35
    }),
    buildingDamageMultiplier: 0.35
});

Blocks.scathe.ammoTypes.put(Vars.content.item("blastanium-compound"), compoundBulletScathe);
Blocks.titan.ammoTypes.put(Vars.content.item("blastanium-compound"), compoundBulletTitan);