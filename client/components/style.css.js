const bgGradient = {
  'background': 'linear-gradient(135deg, rgb(116, 79, 128) 0%, rgb(40, 34, 52) 100%)',
  'width': '100%',
  'height': '100%',
  'zIndex': '0',
}

const trackArt = {
  'backgroundImage': "url('https://i1.sndcdn.com/artworks-000568782443-8f6r8k-t500x500.jpg')",
  'position': 'absolute',
  'top': '20px',
  'right': '20px',
  'zIndex': '1',
  'width': '340px',
  'height': '340px'
}

const playLink = {
  'width': '100%',
  'height': '100%',
  'borderRadius': '50%',
  'backgroundColor': '#f50',
  'borderColor': '#f50',
  'postion': 'absolute',
  'boxSizing': 'border-box',
  'zIndex': '1',
  'textIndex': '-100000em',
  'backgroundRepeat': 'no-repeat',
  'backgroundPosition': '60% center',
  'borderStyle': 'none',
  'backgroundSize': '40% 60%', 
  'backgroundImage': 'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE4cHgiIGhlaWdodD0iMjlweCIgdmlld0JveD0iMCAwIDE4IDI5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy4yLjIgKDk5ODMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPlBsYXkgNjA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iYnV0dG9ucyIgc2tldGNoOnR5cGU9Ik1TQXJ0Ym9hcmRHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2NjUuMDAwMDAwLCAtODE4LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTY2NSw4NDcgTDE2NjkuMTUzODUsODMyLjUgTDE2NjUsODE4IEwxNjgzLDgzMi41IEwxNjY1LDg0NyBaIiBpZD0iUGxheS02MCIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+)'
}

const trackPlayer = {
  'position': 'relative',
  'height': '380px',
  'width': '1180px',
  'margin': '0 auto',
  'background': '#e5',
  'display': 'block'
}

const trackArea = {
  'position': 'absolute',
  'top': '0',
  'left': '0',
  'width': '100%',
  'height': '100%',
  'boxSizing': 'border-box',
  'padding': '30px 560px 20px 30px',
  'zIndex': '10'
}

const playButtonDiv = {
  'width': '60px',
  'height': '60px',
  'marginRight': '10px',
  'alignSelf': 'flexStart'
}

const trackInfo = {
  'position': 'absolute',
  'top': '29px',
  'width': '150px',
  'right': '390px',
  'textAlign': 'right'
}

const titleArea = {
  'display': 'flex',
  'alignItems': 'flexStart',
}

const artistTrackContainer = {
  'flex': '1'
}

const artistLabelContainer = {
  'marginBottom': '7px'
}

const artistLabel = {
  'color': '#ccc',
  'fontWeight': '100',
  'backgroundColor': 'rgba(0, 0, 0, .8)',
  'fontSize': '16px',
  'lineHeight': '1.2',
  'padding': '2px 7px 3px',
  'textDecoration': 'none',
  'fontFamily': 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif'
}

const trackLabel = {
  'color': '#fff',
  'fontWeight': '100',
  'backgroundColor': 'rgba(0, 0, 0, .8)',
  'fontSize': '24px',
  'lineHeight': '37px',
  'padding': '2px 7px 3px',
  'fontFamily': 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif'
}

const relativeTime = {
  'color': '#fff',
  'fontWeight': '100',
  'fontSize': '16px',
  'lineHeight': '1.2',
  'padding': '2px 7px 3px',
  'fontFamily': 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif'
}

const trackTag = {
  'color': '#fff',
  'maxWidth': '120px',
  'height': '20px',
  'padding': '0px 7px',
  'background': '#999',
  'border': '1px solid #999',
  'fontWeight': '100',
  'fontSize': '14px',
  'lineHeight': '20px',
  'whiteSpace': 'no-wrap',
  'borderRadius': '20px',
  'textDecoration': 'none',
  'padding': '2px 7px 3px',
  'float': 'right',
  'display': 'inline-block',
  'fontFamily': 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif'
}

const timeContainer = {
  'marginBottom': '16px'
}

export default { 
  bgGradient, 
  trackArt, 
  playLink, 
  trackPlayer, 
  trackArea, 
  playButtonDiv, 
  trackInfo, 
  titleArea,
  artistTrackContainer,
  artistLabelContainer,
  trackLabel,
  artistLabel,
  relativeTime,
  trackTag,
  timeContainer
}