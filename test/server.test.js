import request from 'request'

test('GET /tracks returns a valid shape', (done) => {
  request('http://localhost:3001/tracks/AmigoKing/Little Bugs', (err, res, body) => {
    const track = JSON.parse(body)

    expect(typeof track.name).toBe('string')
    expect(typeof track.artist).toBe('string')
    expect(typeof track.cdn_url).toBe('string')
    expect(typeof track.art_url).toBe('string')
    expect(Array.isArray(track.tags)).toBe(true)
    expect(typeof track.plays).toBe('number')
    expect(typeof track.likes).toBe('number')
    expect(typeof track.reposts).toBe('number')
    expect(typeof track.date_posted).toBe('string')

    done()
  })
})

test('GET /tracks returns 400 and a message for a non existant track', (done) => {
  request('http://localhost:3001/tracks/AmigoKing/doesnt_exist', (err, res, body) => {
    expect(res.statusCode).toBe(400)
    expect(typeof body).toBe('string')

    done()
  })
})