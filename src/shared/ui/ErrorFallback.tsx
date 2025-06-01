import type { FallbackProps } from 'react-error-boundary';

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
    return (
        <div role="alert" className="p-4 border border-red-500 rounded bg-red-100 text-red-900">
            <p className="font-bold mb-2">Что-то пошло не так:</p>
            <pre className="whitespace-pre-wrap">{error.message}</pre>
            <button
                onClick={resetErrorBoundary}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Попробовать снова
            </button>
        </div>
    );
}
