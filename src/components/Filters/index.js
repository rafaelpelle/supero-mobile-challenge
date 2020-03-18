import React, { useState } from 'react'
import { View, Button, Text, TouchableWithoutFeedback, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { darkGrey } from '../../utils/colors'
import { styles } from './styles'
import TextInput from '../TextInput'

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

export default function Filters({ onSubmit, isLoading, totalItems }) {
  const [collapseAnimation] = useState(new Animated.Value(0))
  const [fadeAnimation] = useState(new Animated.Value(0))

  const handleAnimation = (toValue, duration = 400, animated) => {
    Animated.timing(animated, { toValue, duration }).start()
  }

  const toggleFilter = () => {
    if (collapseAnimation.__getValue()) {
      handleAnimation(0, 400, collapseAnimation)
      handleAnimation(0, 400, fadeAnimation)
    } else {
      handleAnimation(1000, 400, collapseAnimation)
      handleAnimation(1, 400, fadeAnimation)
    }
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Animated.View
            style={{
              ...styles.animatedContainer,
              maxHeight: collapseAnimation,
              opacity: fadeAnimation,
            }}
          >
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
            <Button
              title='Aplicar Filtros'
              onPress={() => {
                handleSubmit()
                toggleFilter()
              }}
            />
          </Animated.View>
          <TouchableWithoutFeedback onPress={toggleFilter}>
            <Icon style={styles.filterIcon} name='filter' size={30} color={darkGrey} />
          </TouchableWithoutFeedback>
          <Text style={styles.totalItems}>
            {isLoading ? 'Carregando livros...' : `${totalItems} livros encontrados`}
          </Text>
        </View>
      )}
    </Formik>
  )
}
