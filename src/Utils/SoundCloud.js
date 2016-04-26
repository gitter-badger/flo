/**
 * Created by tushar.mathur on 26/04/16.
 */

'use strict'

import qs from 'qs'

const client_id = '1862b9bf02ed7c80d0f545f835ad8773'
const baseURL = 'https://api.soundcloud.com'
export const get = (path, params) => {
  const paramsSecure = qs.stringify({...params, client_id})
  return fetch(`${baseURL}${path}?${paramsSecure}`).then(x => x.json())
}

export const searchTracks = q$ => {
  return q$.debounce(500)
    .flatMap(q => get('/tracks', {q}))
}