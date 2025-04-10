import { Button } from '@czi-sds/components'
import { useTypedLoaderData } from 'remix-typedjson'

import { LandingPageDataQuery } from 'app/__generated_v2__/graphql'
import { I18n } from 'app/components/I18n'
import { Link } from 'app/components/Link'
import { useI18n } from 'app/hooks/useI18n'
import { cns, cnsNoMerge } from 'app/utils/cns'

function MetricField({ title, count }: { title: string; count: number }) {
  return (
    <div
      className={cns(
        'flex flex-col items-center justify-center',
        'flex-auto max-w-[120px] w-full px-sds-m',
        'font-semibold',
      )}
    >
      <p className="text-sds-caps-xxxs-600-wide leading-sds-caps-xxxs uppercase drop-shadow-landing-header">
        {title}
      </p>
      <p className="text-sds-header-l-600-wide leading-sds-header-l drop-shadow-landing-header">
        {count.toLocaleString()}
      </p>
    </div>
  )
}

const DIVIDER = (
  <div className="w-[1px] flex-initial h-full bg-gray-400 drop-shadow-landing-header" />
)

export function IndexHeader() {
  const { t } = useI18n()
  const data = useTypedLoaderData<LandingPageDataQuery>()

  return (
    <div
      className={cnsNoMerge(
        'bg-img-landing-header',
        // layout
        'w-full h-[325px]',
        'py-sds-xxl px-sds-xl',
        'flex flex-col items-center justify-center',
        // background'
        'bg-gradient-img-to-b bg-auto bg-no-repeat bg-black bg-top',
        // values ripped from figma: `background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.75) 16.69%, rgba(0, 0, 0, 0.3) 88.71%);`
        'from-black',
        'via-[rgba(0,0,0,0.75)] via-[16.69%]',
        'to-[rgba(0,0,0,0.3)] to-[88.71%]',
      )}
    >
      <div className="flex flex-col items-center gap-sds-m text-white">
        <div className="flex flex-col gap-sds-xl items-center">
          <h1 className="text-[32px] leading-[34px] font-semibold drop-shadow-landing-header">
            <I18n i18nKey="landingHeaderTitle" />
          </h1>
          <div className="flex flex-row justify-center w-full">
            <MetricField
              title={t('datasets')}
              count={data.datasetsAggregate.aggregate?.[0]?.count ?? 0}
            />
            {DIVIDER}
            <MetricField
              title={t('species')}
              count={data.distinctSpecies.aggregate?.[0]?.count ?? 0}
            />
            {DIVIDER}
            <MetricField
              title={t('tomograms')}
              count={data.tomogramsAggregate.aggregate?.[0]?.count ?? 0}
            />
          </div>
          <Link to="/browse-data/datasets">
            <Button
              className={cns(
                '!bg-light-sds-color-primitive-gray-100 !text-black !shadow-none',
                'hover:text-black hover:!bg-white',
                'drop-shadow-[0_0_7px_rgba(0,0,0,0.5)]',
              )}
              sdsType="primary"
              sdsStyle="rounded"
            >
              {t('browseData')}
            </Button>
          </Link>
        </div>
        <Link to={t('urlAPIQuickstart')}>
          <p className="underline underline-offset-1 decoration-1 text-sds-body-xxs-400-wide leading-none drop-shadow-landing-header">
            <I18n i18nKey="orExploreViaApi" />
          </p>
        </Link>
      </div>
    </div>
  )
}
