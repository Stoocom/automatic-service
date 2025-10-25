import type { FC, SVGProps } from 'react';

import type { IconProps } from './model/types';

interface IconModule {
  ReactComponent: FC<SVGProps<SVGSVGElement>>
}

const iconModules = import.meta.glob<IconModule>(
  '@/shared/assets/icons/*.svg',
  { eager: true },
);

export const Icon: FC<IconProps> = ({ name, width = 24, height = 24, ...props }: IconProps) => {
  const iconPath = `/src/shared/assets/icons/${name}.svg`;
  const iconModule = iconModules[iconPath];

  if (!iconModule) {
    console.error(`Icon "${name}" not found at path: ${iconPath}`);
    return <span className='icon-missing'>⚠️</span>;
  }

  const IconComponent = iconModule.ReactComponent;

  return (
    <IconComponent
      width={width}
      height={height}
      {...props}
    />
  );
}
