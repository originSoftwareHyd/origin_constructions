export default function Icon({ name, className = '' }) {
  const common = {
    className: `h-5 w-5 ${className}`.trim(),
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true'
  }

  switch (name) {
    case 'menu':
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      )
    case 'close':
      return (
        <svg {...common}>
          <path d="M5 5l14 14M19 5L5 19" />
        </svg>
      )
    case 'arrow':
      return (
        <svg {...common}>
          <path d="M5 12h13M13 6l6 6-6 6" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...common}>
          <path d="M6.8 3.9l2.9 2a1.4 1.4 0 0 1 .4 1.9L8.8 10c1.2 2.3 2.9 4 5.2 5.2l2.2-1.3a1.4 1.4 0 0 1 1.9.4l2 2.9a1.4 1.4 0 0 1-.4 1.9l-1.7 1.1a3.4 3.4 0 0 1-3.2.3C9.2 18.5 5.5 14.8 3.6 9.4a3.4 3.4 0 0 1 .3-3.2L5 4.4a1.4 1.4 0 0 1 1.8-.5Z" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="1.25" />
          <path d="M4 7l8 6 8-6" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7v5l3.3 2" />
        </svg>
      )
    case 'pin':
      return (
        <svg {...common}>
          <path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z" />
          <circle cx="12" cy="10" r="2.15" />
        </svg>
      )
    case 'grid':
      return (
        <svg {...common}>
          <path d="M5 5h5v5H5zM14 5h5v5h-5zM5 14h5v5H5zM14 14h5v5h-5z" />
        </svg>
      )
    case 'ruler':
      return (
        <svg {...common}>
          <path d="M5 18.5L18.5 5a1.4 1.4 0 0 1 2 2L7 20.5H5v-2Z" />
          <path d="M13 7.5l3.5 3.5M10.5 10l3.5 3.5M8 12.5l3.5 3.5" />
        </svg>
      )
    default:
      return null
  }
}
