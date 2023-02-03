import Division from '@/enums/divisions'

type divDictType = {
  [key: number]: string
}

export const divisDict: divDictType = {
  [Division.Fms]: 'подразделение ФМС',
  [Division.GuvdOrMvd]: 'ГУВД или МВД региона',
  [Division.UvdOrOvd]: 'УВД или ОВД района или города',
  [Division.Police]: 'отделение полиции'
};
