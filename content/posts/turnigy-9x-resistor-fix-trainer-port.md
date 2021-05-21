---
title: Turnigy 9x 'Resistor Fix' Trainer Port
date: 2015-07-25 18:40:17
tags:
  - PCB
  - Quad Copter
  - Radio Control
  - RC
categories:
  - Radio Control
---
The 'resistor fix' solves the problem of needing to unplug the wireless module in order to use the trainer port.

![](IMG_5466.jpg)

It involves cutting a trace on a PCB inside the transmitter, and soldering a resistor (usually a 1kOhm resistor) in series by bridging the cut trace.

Why do you need to unplug the wireless module in the first place?

## A Little More Theory

The trainer port on the 9X contains a switch (that triggers when a plug is inserted into the trainer jack) that powers off the wireless module to ensure the 9X no longer transmits its signal. Normally, when wireless module is powered on, the radio sends a data signal to the wireless module that is between 0V and +3.3V.

Unfortunately, when the 2.4GHz wireless module loses power, the data signal coming from the radio processor is essentially shorted to ground through a high voltage protection diode on the signal pin of the wireless module. The data signal that goes to the wireless module happens to be the same signal routed to the trainer port. Adding a resistor in series with the signal going to the wireless module breaks the short to ground and allows the full voltage signal to reach the trainer port.

Notice, the short to ground only occurs when the 2.4GHz module loses power. When the wireless module receives power, the data signal behaves like a proper input and maintains high impedance, probably in the 10kOhm and above range. By selecting a resistor much lower in resistance than the input impedance of the wireless module, say 1k, the resistance added by the fix is negligible and does not affect normal operation of the radio.

## The Actual Fix

**Items needed**

* Philips Screw Driver
* Xact-O Knife or sharp blade
* Resistor with value around 1k Ohm
* Soldering iron

**Steps**

1\. Start by taking off the back of the 9X by removing the 6 screws on the back
2\. Carefully open radio. Manipulating the sides should allow you to be able to lay both sides flat without disconnecting any cables.

![9x Cracked Open](9x_cracked_open.jpg "9x Cracked Open")

3\. Locate the trace for the data signal (top pin and outer trace on left).

![9x Resistor in Place](9x_resistor_in_place.jpg "9x Resistor in Place")</div>

4\. Using the Xact-O knife, cut a small notch in trace and scrape the solder mask (green enamel) off of the trace far enough apart so the resistor bridges the notch and both leads lay on bare copper (picture 1 below) or cover a resistor in heat shrink and solder each end to the corresponding pins (picture 2 below).

![9x Cut Trace](9x_with_xacto.jpg "9x Cut Trace")

![9x Resistor Heatshrinked](resistor-heatshrinked.png "9x Resistor Heatshrinked")

Solder both sides of the resistor down to either side of the trace where the solder mask has been scraped off.

5\. Carefully close the radio, redoing the screws in the back.
6\. Enjoy not having to unplug the wireless module to use your radio with a sim or trainer!
