import { eachDayOfInterval, format, isFirstDayOfMonth } from "date-fns";
import MeterLine from "../MeterLine/MeterLine";
import styles from "./MeterDay.module.scss";

interface IProps {
  date: Date;
  width: number;
  zoomValue: number;
}

const MeterDay: React.FunctionComponent<IProps> = ({
  date,
  width,
  zoomValue,
  ...props
}) => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const days = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  const hours = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <div
      className={styles.monthDaysContainer}
      {...props}
      style={{ width: `${width}px` }}
    >
      <div className={styles.backgroundYear}>
        {format(firstDayOfMonth, "yyyy")}
      </div>

      {days.map((day, index) => {
        return (
          <div key={index} className={styles.daysContainer}>
            <MeterLine
              displayValue={
                isFirstDayOfMonth(day)
                  ? day.getMonth() === 0
                    ? format(day, "yyyy")
                    : format(day, "d LLL")
                  : format(day, "d")
              }
              isLarger={isFirstDayOfMonth(day)}
            />
            {/* {zoomValue > 500 && (
              <div className={styles.hoursContainer}>
                {hours.map((_, index) => (
                  <div key={index} className={styles.hour} />
                ))}
              </div>
            )} */}
          </div>
        );
      })}
    </div>
  );
};

export default MeterDay;
