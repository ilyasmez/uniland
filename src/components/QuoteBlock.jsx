import classNames from 'classnames';
import slugify from 'slugify';

export default function QuoteBlock({
  title = '',
  quote = '',
  author = '',
  source = '',
  theme = 'light',
}) {
  const blockClasses = classNames(
    'quote',
    'max-w-3xl',
    { ['bg-aqua-900']: theme === 'dark' },
    { 'bg-green-50': theme === 'spring' },
    { 'bg-mango-400': theme === 'mango' },
    { 'bg-ice-50': theme === 'ice' }
  );

  const quoteDecoClasses = classNames(
    "before:content-['“']",
    'before:text-8xl',
    'before:block',
    'before:font-serif',
    'before:w-16',
    'before:h-16',
    'md:before:text-center',
    'md:before:absolute',
    'md:before:-inset-x-20',
    'md:before:align-middle',
    'md:before:justify-center',
    'md:before:items-center',
    'md:before:items'
  );

  const quoteClasses = classNames(
    'font-bold',
    'font-serif',
    'text-4xl',
    'text-left',
    'prose',
    'md:flex',
    'relative',
    quoteDecoClasses,
    { 'text-white': theme === 'dark' },
    { 'text-aqua-900': theme !== 'dark' }
  );

  const headingClasses = classNames(
    'font-bold',
    'font-serif',
    'text-2xl',
    'mb-8'
  );

  return (
    <figure data-theme={theme} className={blockClasses}>
      {title && <h3 className={headingClasses}>{title}</h3>}

      <blockquote
        className={quoteClasses}
        dangerouslySetInnerHTML={{ __html: quote }}
      ></blockquote>
      <figcaption className="font-sans text-xl my-4">
        {(author || source) && <span>&mdash; </span>}
        {author && <span>{author}</span>}
        {source && (
          <>
            , <cite>{source}</cite>
          </>
        )}
      </figcaption>
    </figure>
  );
}
