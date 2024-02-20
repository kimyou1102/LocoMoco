'use client';

import MGCList from '@/app/_components/MGCList/MGCList';
import { MGCSummary } from '@/app/_components/MGCList/MGCListItem';
import { LanguageTypes, MGCTypes, StudyTypes } from '@/constants/types';
import { Search } from 'lucide-react';

const dummyData: MGCSummary[] = [
  {
    _id: 1,
    title: '모각코 구함',
    location: '구로동',
    createAt: new Date('1995-12-17T03:24:00'),
    hits: 3,
    likeCount: 30,
    currentParticipantsCount: 2,
    maxParticipantsCount: 8,
    MGCType: MGCTypes.LocationNotConfirmed,
    languageTypes: [LanguageTypes.JAVA],
    studyTypes: [StudyTypes.BE],
  },
  {
    _id: 2,
    title: '면접 준비 같이해요~',
    location: '남가좌동',
    createAt: new Date('2023-12-17T03:24:00'),
    hits: 3,
    likeCount: 30,
    currentParticipantsCount: 2,
    maxParticipantsCount: 3,
    MGCType: MGCTypes.LocationConfirmed,
    languageTypes: [LanguageTypes.JAVA, LanguageTypes.JAVASCRIPT],
    studyTypes: [StudyTypes.BE, StudyTypes.FE, StudyTypes.web],
  },
  {
    _id: 3,
    title: '번개 모각코 하실 분~!',
    location: '구로동',
    createAt: new Date('2024-02-14T00:24:00'),
    hits: 10,
    likeCount: 20,
    currentParticipantsCount: 1,
    maxParticipantsCount: 5,
    MGCType: MGCTypes.ThunderMGC,
    languageTypes: [LanguageTypes.JAVA, LanguageTypes.JAVASCRIPT, LanguageTypes.PYTHON],
    studyTypes: [
      StudyTypes.BE,
      StudyTypes.FE,
      StudyTypes.web,
      StudyTypes.BE,
      StudyTypes.FE,
      StudyTypes.web,
    ],
  },
];

const SearchMGC = () => {
  return (
    <div className="mt-20pxr">
      <div
        id="input-wrap"
        className="flex h-50pxr flex-row items-center rounded-lg border"
      >
        <Search
          width={20}
          height={20}
          color="gray"
          className="m-10pxr"
        />
        <input
          placeholder="장소를 입력해 주세요."
          className="h-10 w-full text-sm focus:outline-none"
        />
      </div>
      {/* Todo: filter 가져와야 함 [2024/02/13] */}
      {/* Todo: 생성 버튼 가져와야 함 [2024/02/13] */}
      <MGCList data={dummyData}></MGCList>
    </div>
  );
};

export default SearchMGC;