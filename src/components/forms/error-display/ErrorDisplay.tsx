import './style.scss';
export interface ErrorDisplayIProps {
  text: string;
  show: boolean;
  success?: boolean;
}

const ErrorDisplay = ({
  text,
  show = false,
  success = false,
}: ErrorDisplayIProps) => {
  return (
    <>
      {show && (
        <div className="error_display">
          {!success && (
            <i className="cross">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z" />
              </svg>
            </i>
          )}

          {success && (
            <i className="tick">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
              </svg>
            </i>
          )}

          <span className={success ? 'text-green-500' : 'text-red-500'}>
            {text}
          </span>
        </div>
      )}
    </>
  );
};
export { ErrorDisplay };
