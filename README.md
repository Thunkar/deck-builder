# **Rules**

You'll need:

* Ship parts
* Bases
* Movement rulers
* Range rulers
* Hull dials
* Direction dials
* Rotation dials
* Deflector dials
* Energy cubes
* Heat cubes
* Cards

# Building ships

## Ship sizes

* Interceptor: 5 core cubes MAX. Size I reactor.
* Frigate: 10 core cubes MAX. Size II reactor.
* Destructor: 15 core cubes MAX. Size III reactor.

## The turn

### 1) Apply previous movement vectors

Use the dials you may have accumulated in previous turns to determine your current position and orientation. They can be applied in any order.

***Exception***: If any part of your ship or its base comes into contact with another ship, remove all the ones *after* the impact from your dial pool (basically, you use another ship to brake). Now the owners of the ships must throw a 1D10 each. The ship that gets the lower number receives hull damage for the value of the speed that the first removed dial was indicating.

### 2) Reclaim energy/heat cubes from your systems

You can vent any combination of energy cubes (back to your reactor) and/or heat cubes (back to the collective pool) as long as you keep the combined number of them under the `Maximum flow` stat of your reactor.

Not venting heat cubes and keeping systems overheated beyond the initial trigger of the ability will yield 1 hull damage per heat cube per turn.

### 3) Power up and use systems

You can move *any* number of energy cubes from your reactor to your subsystems in order to power them. If you meet the power (and maybe other) requirements, you can use *only one* ability of that component each turn

#### 3.1) Movement

A thruster affects a ship's *linear* or *rotational speed*, not its position. Using a thruster's ability will increase the ship's speed in the ***direction that thruster is physically facing*** by the amount of units the card specifies. The same goes for the maneuvering thrusters, they will increase or decrease the *speed* at which the ship is rotating by the specified amount (but they have no orientation).

When you fire up your engines you will immediately move in the opposite direction the thruster is facing, but also accumulate that speed in a direction dial that will be applied again in the first step of your next turn. It is possible to fire engines in order to cancel out previously acquired speed in the opposite direction.

#### 3.2) Weapons

Weapons have a range and an a maximum angle they can gimbal to target a ship. Physical weapon orientation determines where that angle is centered. A ship is considered in range if the range ruler intersects its base inside the firing angle.

A weapon has a minimum dice value that is considered an impact. Some weapons also allow for multiple D10 to be thrown each time they fire. A successful impact will yield as much damage as the card shows. A 1 is always a miss and a 10 is always a critical hit, which entitles the attacking player to disable one system of the defender.

#### 3.3) Disabled systems

A system that has been disabled by a critical hit can be repaired by assigning the required number of energy cubes to it during a turn. That system cannot be used during this turn and the energy cubes automatically return to the reactor after the turn ends.

#### 3.4) Deflectors

Deflectors make the defender ship harder to hit by weapons. They must be powered and then pointed towards a direction. They add the specified amount to the dice throw of the attacks coming from the direction covered by the shield. A deflector can be moved or changed from narrow to wide (or vice-versa) without powering it down and up again, but that change will add 1 heat cube to it.