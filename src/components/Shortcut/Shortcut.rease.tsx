import 'rease/jsx'
import { TypeReaseContext, TypeReaseProp } from 'rease'

import { random_string } from '#utils/string'
import { randomTo } from '#utils/math'

export function Shortcut(
  this: TypeReaseContext,
  {
    name,
    size = 4.8,
    inline = false
  }: {
    name?: TypeReaseProp<string>
    size?: TypeReaseProp<number>
    inline?: TypeReaseProp<boolean>
  }
): void {
  const pub = this.pub
  const id = pub.id = 'sc' + random_string()

  ;(
    <div
      style={[
        `width:${inline!! ? '100%' : size!! as any * 2.5 + 'em'}`,
        `margin:${size!! as any / 5}em`,
      ]}
    >
      <div
        id={id}
        class={[
          'd-flex align-items-center user-select-none',
          inline!! ? 'flex-row' : 'flex-column'
        ]}
        // style={['background: #add']}
        title={name!! || id}
      >
        <div
          style={[`width:${size!!}em;height:${size!!}em;`]}
          style--background="#ad3"
        />
        <div
          class={[
            'position-relative flex-fill',
            !inline!! && 'w-100 text-center'
          ]}
          style--minHeight={size!! + 'em'}
        >
          <div
            class={[
              inline!! && 'position-absolute top-0 start-0 end-0 bottom-0',
              inline!! && 'd-flex align-items-center',
            ]}
            style={[`${inline!! ? 'padding:0 ' : 'padding-top:'}${size!! as any / 5}em;`]}
          >
            <small class={['text-break', inline!! && 'text-truncate']}>
              {name!! || id + ' 12345'.repeat(randomTo(1, 10))}
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}
