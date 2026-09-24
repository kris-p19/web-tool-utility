export interface UnitDefinition {
  id: string;
  label: string;
  toBase: (value: number) => number;
  fromBase: (value: number) => number;
}

export const unitGroups: Record<string, UnitDefinition[]> = {
  length: [
    {
      id: 'mm',
      label: 'Millimeters (mm)',
      toBase: (value) => value / 1000,
      fromBase: (value) => value * 1000
    },
    {
      id: 'cm',
      label: 'Centimeters (cm)',
      toBase: (value) => value / 100,
      fromBase: (value) => value * 100
    },
    { id: 'm', label: 'Meters (m)', toBase: (value) => value, fromBase: (value) => value },
    {
      id: 'km',
      label: 'Kilometers (km)',
      toBase: (value) => value * 1000,
      fromBase: (value) => value / 1000
    },
    {
      id: 'in',
      label: 'Inches (in)',
      toBase: (value) => value * 0.0254,
      fromBase: (value) => value / 0.0254
    },
    {
      id: 'ft',
      label: 'Feet (ft)',
      toBase: (value) => value * 0.3048,
      fromBase: (value) => value / 0.3048
    }
  ],
  weight: [
    {
      id: 'mg',
      label: 'Milligrams (mg)',
      toBase: (value) => value / 1000000,
      fromBase: (value) => value * 1000000
    },
    {
      id: 'g',
      label: 'Grams (g)',
      toBase: (value) => value / 1000,
      fromBase: (value) => value * 1000
    },
    { id: 'kg', label: 'Kilograms (kg)', toBase: (value) => value, fromBase: (value) => value },
    {
      id: 'lb',
      label: 'Pounds (lb)',
      toBase: (value) => value * 0.45359237,
      fromBase: (value) => value / 0.45359237
    }
  ],
  data: [
    { id: 'b', label: 'Bytes (B)', toBase: (value) => value, fromBase: (value) => value },
    {
      id: 'kb',
      label: 'Kilobytes (KB)',
      toBase: (value) => value * 1000,
      fromBase: (value) => value / 1000
    },
    {
      id: 'mb',
      label: 'Megabytes (MB)',
      toBase: (value) => value * 1000000,
      fromBase: (value) => value / 1000000
    },
    {
      id: 'gb',
      label: 'Gigabytes (GB)',
      toBase: (value) => value * 1000000000,
      fromBase: (value) => value / 1000000000
    }
  ]
};

export function convertUnit(value: number, group: string, from: string, to: string): number {
  const units = unitGroups[group];
  if (!units) throw new Error('ไม่รู้จักหมวดหน่วย');
  const source = units.find((unit) => unit.id === from);
  const target = units.find((unit) => unit.id === to);
  if (!source || !target) throw new Error('ไม่รู้จักหน่วยที่เลือก');
  return target.fromBase(source.toBase(value));
}
