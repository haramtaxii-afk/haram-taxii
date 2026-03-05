import { Metadata } from 'next';
import UmrahEstimator from '@/components/tools/UmrahEstimator';

export const metadata: Metadata = {
    title: 'Umrah Trip Cost Estimator | Taxi Budget Planner - Haram Taxi',
    description: 'Plan your Umrah transportation budget. Estimate taxi costs for airport transfers, Makkah-Madinah travel, and Ziyarat tours for individuals and groups.',
    keywords: ['Umrah cost estimator', 'Umrah transport budget', 'taxi cost Makkah Madinah', 'Umrah trip planner'],
};

export default function UmrahPlannerPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Umrah Transport <span className="text-teal-600">Planner</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Budgeting for your sacred journey made easy. Calculate the total cost of transportation for your entire trip in seconds.
                    </p>
                </div>

                <div className="flex justify-center">
                    <UmrahEstimator />
                </div>
            </div>
        </div>
    );
}
