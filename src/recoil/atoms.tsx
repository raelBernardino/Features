import { atom } from 'recoil';
import { Welcome, Calculator } from '../components'

type ObjectComponent = { component: React.FC }

interface featuresListInterface {
  key: string;
  default: Array<ObjectComponent>;
}

export const featureIndexState = atom({
  key: "featureIndexState",
  default: 0
})

export const featuresListState = atom({
  key: "featuresListState",
  default: [Welcome, Calculator]
})

