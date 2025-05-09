export default class MeterConstants {
  // Levels

  public static minLevel: number = 2;
  public static maxLevel: number = 14;

  public static earliestYearLevel12: number = 3000;
  public static earliestYearLevel3: number = 3000;

  // Zoom options
  public static minZoomValue: number = 25;
  public static maxZoomValue: number = 250;
  public static smallerLinesValue: number = 100;
  public static zoomStep: number = 10;

  // Slide effect options
  public static minTimeElapsedForSlidingEffect: number = 600;
  public static slidingInertiaDumping: number = 0.9;
  public static slidingCutoff: number = 0.1;
  public static debounceWheelMilliseconds: number = 20;
  public static velocityMultiplier: number = 10;
}
