import unittest
from main import TrappingRainWater

class TestTrappingRainWater(unittest.TestCase):
  def test_cutting_overflows(self):
    instance = TrappingRainWater([0,1,0,2,1,0,1,3,2,1,2,1])

    self.assertListEqual(instance.cut_overflows(), [0,1,0,2,1,0,1,2,2,1,2,1])

if __name__ == "__main__":
  unittest.main()