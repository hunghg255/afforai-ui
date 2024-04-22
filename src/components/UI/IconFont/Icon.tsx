// @ts-ignore
import React from 'react';

import classNames from 'classnames';

import { TCustomColor } from '@/components/UI/Text/text-custom.type';
import { TColor } from '@/components/UI/Text/text.type.js';

import { Tt4font } from '../../../../public/svgtocss/t4font-type';

export const Icon = ({
  className = '',
  color = 'neutral-gray-7',
  ...props
}: React.SVGProps<SVGSVGElement> & {
  icon: Tt4font;
  className?: string;
  color?: TColor | TCustomColor;
}) => {
  // @ts-ignore
  return <i className={classNames(props.icon, className, color)} {...props} />;
};
