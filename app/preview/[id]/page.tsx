interface EstimatePageProps {
    params: {
        id: string;
    };
}

export default async function EstimateView({ params }: EstimatePageProps) {
    const { id } = await params;

    return (
        <>
            {id}
        </>
    );
}