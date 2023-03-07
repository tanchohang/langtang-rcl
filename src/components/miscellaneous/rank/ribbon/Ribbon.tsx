export interface IRibbonProps {
  rank: number;
  backgroundColor: string;
  textColor: string;
  width: number;
}

function Ribbon({ rank, textColor, backgroundColor, width }: IRibbonProps) {
  return (
    <div
      className="ribbon"
      style={{
        backgroundColor: backgroundColor,
        width: `${width}px`,
        fontSize: `${width / 2}px`,
      }}
    >
      <span style={{ color: `${textColor}` }}>{rank}</span>
    </div>
  );
}

export { Ribbon };
