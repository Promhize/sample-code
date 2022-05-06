import { FormProviderProps } from 'react-hook-form'

export type FormComponentProps<T = {}> = {
  register: FormProviderProps<T>['register']
  onSubmit: ReturnType<FormProviderProps<T>['handleSubmit']>
  formState: FormProviderProps<T>['formState']
} & Partial<FormProviderProps<T>>
