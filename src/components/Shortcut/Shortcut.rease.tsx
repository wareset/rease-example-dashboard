import 'rease/jsx'
import { TypeReaseContext, TypeReaseProp } from 'rease'
import { subscribablefySafeAll } from 'rease'

import { random_string } from '#utils/string'

import { getIconClass } from './bgIcon'

export function Shortcut(
  this: TypeReaseContext,
  {
    name,
    size = 4.8,
    inline = false,
    isFolder = true
  }: {
    name?: TypeReaseProp<string>
    size?: TypeReaseProp<number>
    inline?: TypeReaseProp<boolean>
    isFolder?: TypeReaseProp<boolean>
  }
): void {
  const pub = this.pub
  const id = pub.id = 'sc' + random_string()

  ;(
    <r-watch
      r-is={subscribablefySafeAll(
        [size, inline, [id, name, isFolder]]
      )}
      r-children={(
        [size, inline, [id, name, isFolder]]:
        [number, boolean, [string, string, boolean]]
      ) => {
        <div
          style={[
            `width:${inline ? '100%' : size * 2.5 + 'em'}`,
            `margin:${size / 5}em`,
          ]}
        >
          <div
            id={id}
            class={[
              'd-flex align-items-center user-select-none',
              inline ? 'flex-row' : 'flex-column'
            ]}
            // style={['background: #add']}
            title={name!! || id}
          >
            <div
              style={[`width:${size}em;height:${size}em;`]}
              class={getIconClass(name!! || id, isFolder!!)}
            />
            <div
              class={[
                'position-relative flex-fill',
                !inline && 'w-100 text-center'
              ]}
              style--minHeight={size + 'em'}
            >
              <div
                class={inline &&
                  'position-absolute top-0 start-0 end-0 bottom-0 ' +
                  'd-flex align-items-center'
                }
                style={[`${inline ? 'padding:0 ' : 'padding-top:'}${size / 5}em;`]}
              >
                <small class={['text-break', inline && 'text-truncate']}>
                  {name || id}
                </small>
              </div>
            </div>
          </div>
        </div>
      }}
    />
  )
}
