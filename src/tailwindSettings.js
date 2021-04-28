import TButton from 'vue-tailwind/dist/t-button'
import TCard from 'vue-tailwind/dist/t-card'

export const tailwindSettings = {
  'primary-button': {
    component: TButton,
    props: {
      classes: 'min-w-xs py-1 text-white text-sm bg-black rounded-full'
    }
  },
  'secondary-button': {
    component: TButton,
    props: {
      classes: 'min-w-xs py-1 bg-white border border-gray-300 text-black text-sm font-semibold rounded-full'
    }
  },
  'inline-button': {
    component: TButton,
    props: {
      classes: 'min-w-xs py-1 text-gray-500'
    }
  },
  'card': {
    component: TCard,
    props: {
      classes: {
        wrapper: 'rounded-lg max-w-sm shadow-lg border',
        body: 'p-3 text-left',
        header: 'p-3',
        footer: 'p-3 text-right'
      }
    }
  }
}

