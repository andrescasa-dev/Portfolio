import { cva, type VariantProps } from "class-variance-authority";

export const textStyles = cva("", {
  variants: {
    type: {
      eyebrow: "text-lg capitalize",
    },
  },
});

export interface TextProps extends VariantProps<typeof textStyles> {
  as: keyof JSX.IntrinsicElements;
  children?: string;
}

const Text = ({ as: Tag, children, type, ...delegate }: TextProps) => {
  return (
    <Tag {...delegate} className={textStyles({ type })}>
      {children}
    </Tag>
  );
};

export default Text;
