/**
 * Created by imamudin.naseem on 27/04/16.
 */

import {div} from '@cycle/dom'
import {Observable} from 'rx'
import * as F from '../../utils/Flexbox'
import * as SC from '../../utils/SoundCloud'
import * as D from '../../utils/DOMUtils'
import {overflowEllipsis, size} from '../../utils/StyleUtils'

const Artwork = url => div({
  style: {
    ...size(35, 35),
    backgroundImage: url ? `url('${url}')` : null,
    backgroundColor: 'rgb(42, 44, 49)',
    backgroundSize: '35px 35px',
    backgroundRepeat: 'no-repeat',
    marginRight: '10px'
  }
})

const TrackDuration = duration =>
  div({style: {marginLeft: '1em', color: '#555'}}, SC.durationFormat(duration))

const TrackDetail = ({artist, title}) =>
  div({style: {overflow: 'hidden', flex: '1 0 0'}}, [
    div({style: overflowEllipsis}, title),
    div({style: {color: '#555', fontSize: '0.8em', ...overflowEllipsis}}, artist)
  ])

export const PlayListItem = ({DOM, track: {title, user, duration, artwork_url, id}, trackListClick$}) => {
  const click$ = DOM.select('.playlist-item').events('click').map(id)
  const defaultStyle = {fontSize: '0.8em', fontWeight: 600, padding: '4px 10px', ...F.RowSpaceBetween}
  return {
    click$,
    DOM: Observable.just(div({
      className: 'playlist-item', style: defaultStyle
    }, [
      Artwork(artwork_url),
      TrackDetail({title, artist: user.username}),
      TrackDuration(duration)
    ]))
  }
}
