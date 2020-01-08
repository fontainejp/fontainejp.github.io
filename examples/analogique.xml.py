from machine import ADC
import time

BROCHE_A0 = ADC(0)

while True:
  print(BROCHE_A0.read())
  print("\n")
  time.sleep(1)