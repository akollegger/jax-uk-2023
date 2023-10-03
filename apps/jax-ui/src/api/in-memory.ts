import { Person } from "../model/Person";
import { Content } from "../model/Content";

export const inMemoryPeople: Person[] = [
  {
    uuid: '1',
    firstName: 'Andreas',
    lastName: 'Kollegger',
    age: 24,
    visits: 100,
  },
  {
    uuid: '2',
    firstName: 'Emil',
    lastName: 'Eifrem',
    age: 40,
    visits: 40,
  },
  {
    uuid: '3',
    firstName: 'Alexander',
    lastName: 'Erdl',
    age: 45,
    visits: 20,
  },
]

export const inMemoryContent: Content[] = [
  {
    uuid: '1',
    title: 'The Matrix',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    contentType: 'video/mp4',
    contentUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
  },
  {
    uuid: '2',
    title: 'Big Buck Bunny',
    description: 'A large and lovable rabbit deals with three tiny bullies, led by a flying squirrel, who are determined to squelch his happiness.',
    contentType: 'video/mp4',
    contentUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  },
  {
    uuid: '3',
    title: 'Elephant Dream',
    description: 'The first Blender Open Movie from 2006',
    contentType: 'video/mp4',
    contentUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
  },
  {
    uuid: '4',
    title: 'For Bigger Blazes',
    description: 'The first Blender Open Movie from 2006',
    contentType: 'video/mp4',
    contentUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  },
  {
    uuid: '5',
    title: 'For Bigger Escape',
    description: 'The first Blender Open Movie from 2006',
    contentType: 'video/mp4',
    contentUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
  },
  {
    uuid: '6',
    title: 'For Bigger Fun',
    description: 'The first Blender Open Movie from 2006',
    contentType: 'video/mp4',
    contentUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
  },
  {
    uuid: '7',
    title: 'Sintel',
    description: 'Sintel is an independently produced short film',
    contentType: 'video/mp4',
    contentUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
  }
]

export const getPeople = async (): Promise<Person[]> => {
  return inMemoryPeople;
}

export const getPerson = async (uuid: string): Promise<Person> => {
  const foundPerson = inMemoryPeople.find(person => person.uuid === uuid);
  if (!foundPerson) throw new Error(`Person with uuid ${uuid} not found`);
  return foundPerson;
}

export const createPerson = async (person: Person): Promise<Person> => {
  inMemoryPeople.push(person);
  return person;
}
