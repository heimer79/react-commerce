

/**
 * Represents the layout component.
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components to be rendered within the layout.
 * @returns {JSX.Element} - The rendered layout component.
 */
export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center mt-20">
        {children}
    </div>
  )
}
