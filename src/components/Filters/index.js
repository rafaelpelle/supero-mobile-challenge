import React from 'react'
import { View, Button, Text } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import TextInput from '../TextInput'
import { styles } from './styles'

const currentYear = new Date().getFullYear()
const initialValues = { searchTerm: '', initialDate: '', endDate: '' }
const validationSchema = Yup.object().shape({
  searchTerm: Yup.string(),
  initialDate: Yup.number()
    .min(1500, 'A data inicial deve ser maior que 1500.')
    .max(2020, `A data inicial deve ser menor que ${currentYear + 1}`),
  endDate: Yup.number()
    .min(1500, 'A data fim deve ser maior que 1500.')
    .max(2020, `A data inicial deve ser menor que ${currentYear + 1}`),
})

export default function Filters({ onSubmit }) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Filtros</Text>
          <TextInput
            placeholder='Busque por título, autor ou ISBN...'
            onChangeText={handleChange('searchTerm')}
            onBlur={handleBlur('searchTerm')}
            value={values.searchTerm}
            error={errors.searchTerm}
            touched={touched.searchTerm}
          />
          <View style={styles.dateContainer}>
            <TextInput
              isDateInput
              label='De'
              placeholder='Data início'
              onChangeText={handleChange('initialDate')}
              onBlur={handleBlur('initialDate')}
              value={values.initialDate}
              error={errors.initialDate}
              touched={touched.initialDate}
            />
            <TextInput
              isDateInput
              label='Até'
              placeholder='Data fim'
              onChangeText={handleChange('endDate')}
              onBlur={handleBlur('endDate')}
              value={values.endDate}
              error={errors.endDate}
              touched={touched.endDate}
            />
          </View>
          <Button onPress={handleSubmit} title='Aplicar Filtros' />
        </View>
      )}
    </Formik>
  )
}
