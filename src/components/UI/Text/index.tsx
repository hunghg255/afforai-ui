/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';

import classNames from 'classnames';

import { TCustomColor } from '@/components/UI/Text/text-custom.type';
import { TColor } from '@/components/UI/Text/text.type';

interface TextProps {
  children: React.ReactNode;
  type?:
    | 'heading1-medium'
    | 'heading2-medium'
    | 'heading3-bold'
    | 'heading3-medium'
    | 'heading3-regular'
    | 'heading4-regular'
    | 'heading4-medium'
    | 'heading5-bold'
    | 'heading5-medium'
    | 'heading5-regular'
    | 'body-bold'
    | 'body-medium'
    | 'body-regular'
    | 'body-underline'
    | 'caption-regular'
    | (string & {});
  color?: TColor | TCustomColor;
  disabled?: boolean;
  state?: null | 'disable';
  className?: string | (string & {});
  onClick?: () => void;
  element?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

const Text: React.FC<TextProps> = ({
  type,
  color,
  disabled = false,
  className = '',
  onClick = () => {},
  children,
  element = 'p',
}) => {
  const classes = classNames(type, color, { 'text-disable': disabled }, className);

  return React.createElement(
    element,
    {
      className: classes,
      onClick,
    },
    React.createElement(React.Fragment, undefined, children),
  );
};

export default Text;
