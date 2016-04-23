/**
 * Created by tushar.mathur on 23/04/16.
 */

'use strict'

import {div, i} from '@cycle/dom'
import {Observable} from 'rx'
import * as S from '../../lib/StyleUtils'
import * as F from '../../lib/Flexbox'

const BUTTON_SIZE = 80

const controlsSTY = {
  ...F.RowMiddle,
  width: '100%',
  color: 'rgb(148, 143, 63)',
  padding: '20px 0'
}

const buttonSTY = {
  ...S.size(BUTTON_SIZE, BUTTON_SIZE),
  ...F.ColMiddle
}

const primaryButtonSTY = {
  ...buttonSTY,
  fontSize: '4em'
}

const secondaryButtonSTY = {
  ...buttonSTY,
  fontSize: '2em'
}

export default () => {
  return {
    DOM: Observable.just(div({style: controlsSTY}, [
      i('.fa.fa-fast-backward', {style: secondaryButtonSTY}),
      i('.fa.fa-play', {style: primaryButtonSTY}),
      i('.fa.fa-fast-forward', {style: secondaryButtonSTY})
    ]))
  }
}