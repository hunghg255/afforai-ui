/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';

import classNames from 'classnames';

import { TColor } from '@/components/UI/Text/text.type';

interface TextProps {
  children: React.ReactNode;
  type?:
    | 'heading-large-semi-bold'
    | 'heading-medium-semi-bold'
    | 'heading-small-semi-bold'
    | 'heading-x-small-semi-bold'
    | 'paragraph-large-medium'
    | 'paragraph-medium-medium'
    | 'heading-x-small-medium'
    | 'paragraph-small-medium'
    | 'paragraph-small-medium-bold'
    | (string & {});
  color?: TColor;
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
