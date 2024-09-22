
interface ButtonProps {
  ButtonType?: string;
  children?: React.ReactNode;
}


export default function Button({ ButtonType, children }: ButtonProps) {
  return (
    <button
      type="submit"
      className={`h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full text-white rounded-[5px]
        cursor-pointer ${ButtonType === "secondary" ? "opacity-[85%]" : ""}`}
    >
      {children}
    </button >
  )
}

