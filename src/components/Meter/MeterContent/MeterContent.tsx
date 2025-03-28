import MeterDay from "../MeterDay";
import MeterMonth from "../MeterMonth";

interface IProps {
  level: number;
  element: Date | number;
  elementWidth: number;
  zoomValue: number;
}

const MeterContent: React.FunctionComponent<IProps> = ({
  level,
  element,
  elementWidth,
  zoomValue,
}: IProps) => {
  return (
    <>
      {level === 1 && (
        <MeterDay
          date={element as Date}
          width={elementWidth}
          zoomValue={zoomValue}
        />
      )}
      {level === 2 && (
        <MeterMonth
          date={element as Date}
          width={elementWidth}
          zoomValue={zoomValue}
        />
      )}
    </>
  );
};

export default MeterContent;
