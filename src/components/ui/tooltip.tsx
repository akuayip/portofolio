import * as React from "react";

interface TooltipProps {
  children: React.ReactNode;
  className?: string;  // Tambahkan className sebagai properti opsional
  delayDuration?: number;  // Tetap opsional jika Anda ingin menggunakannya
}

export const TooltipProvider: React.FC<TooltipProps> = ({ children }) => (
  <div className="relative group">{children}</div>
);

export const TooltipTrigger: React.FC<TooltipProps> = ({ children }) => (
  <div className="cursor-pointer">{children}</div>
);

export const TooltipContent: React.FC<TooltipProps> = ({
  children,
  className,  // Tambahkan className di sini
  delayDuration = 0,
}) => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (visible) {
      timer = setTimeout(() => setVisible(true), delayDuration);
    } else {
      setVisible(false);
    }
    return () => clearTimeout(timer);
  }, [visible, delayDuration]);

  return (
    <div
      className={`absolute bottom-full mb-2 ${visible ? "block" : "hidden"} ${className} bg-black text-white text-xs rounded p-2`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
    </div>
  );
};

export const Tooltip: React.FC<TooltipProps> = ({ children, className }) => (
  <div className={`relative ${className}`}>{children}</div>
);
