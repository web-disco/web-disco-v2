export const components = {
  marks: {
    color: ({ value, children }: any) => {
      return <span style={{ color: value?.hex }}>{children}</span>;
    },
    link: ({ value, children }: any) => {
      return (
        <a href={value?.href} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    },
  },
};
