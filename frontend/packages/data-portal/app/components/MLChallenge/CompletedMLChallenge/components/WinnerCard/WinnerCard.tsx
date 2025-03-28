import { Button } from '@czi-sds/components'

import { GetWinningDepositionsDataQuery } from 'app/__generated_v2__/graphql'
import { AuthorList } from 'app/components/AuthorList'
import { Link } from 'app/components/Link'
import { useI18n } from 'app/hooks/useI18n'
import { cns } from 'app/utils/cns'

import { TEAM_INFO_BY_DEPOSITION_ID } from '../../constants'

export type Winner = GetWinningDepositionsDataQuery['depositions'][0]

const getNumberSuffix = (place: number) => {
  switch (place) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}

export function WinnerCard({
  winner,
  place,
}: {
  winner: Winner
  place: number
}) {
  const { t } = useI18n()
  return (
    <div
      className={cns(
        'py-sds-l px-sds-xl',
        'bg-white shadow-card',
        'grid grid-cols-1 gap-sds-s',
        place <= 3
          ? 'border-t-[8px] border-t-light-sds-color-semantic-accent-ornament'
          : 'border-b-[8px] border-b-light-sds-color-semantic-accent-ornament',
        place <= 3 &&
          'grid-rows-[4fr_5fr] screen-667:grid-cols-[1fr_2fr] screen-667:grid-rows-1 screen-1345:grid-cols-1 screen-1345:grid-rows-[232px_1fr]',
      )}
    >
      {place <= 3 && (
        <div
          style={{
            backgroundImage: `url(${winner.keyPhotoThumbnailUrl ?? ''})`,
          }}
          className="winner-image bg-cover bg-no-repeat bg-center w-full screen-1345:h-[232px]"
        />
      )}
      <div className="grow flex flex-col">
        <div className="flex justify-between mt-sds-l">
          <h3 className="text-sds-header-xl-600-wide leading-sds-header-xl font-semibold">
            {place}
            {getNumberSuffix(place)} Place
          </h3>
          <p className="text-sds-body-m-400-wide leading-sds-body-m">
            Score:{' '}
            {TEAM_INFO_BY_DEPOSITION_ID[winner.id.toString()]?.score || '--'}
          </p>
        </div>
        <h4 className="text-sds-body-m-400-wide leading-sds-body-m font-semibold mt-sds-s">
          {TEAM_INFO_BY_DEPOSITION_ID[winner.id.toString()]?.teamName ||
            'Team Name'}
        </h4>
        <h5 className="text-light-sds-color-primitive-gray-600 mt-sds-xs">
          Members:{' '}
          <span className="text-black">
            <AuthorList
              authors={winner.authors.edges.map((author) => author.node)}
              subtle
            />
          </span>
        </h5>
        {place <= 3 && (
          <p className="mt-sds-s line-clamp-5">{winner.description}</p>
        )}
        <div className="grow flex flex-col items-end screen-360:flex-row gap-sds-m screen-360:gap-sds-l justify-stretch screen-360:justify-end mt-sds-l">
          <Link to={`/depositions/${winner.id}`}>
            <Button
              sdsStyle="rounded"
              sdsType="primary"
              className="w-full screen-360:w-initial"
            >
              {t('viewDeposition')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
