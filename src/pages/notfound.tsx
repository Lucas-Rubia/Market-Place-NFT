import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="text-center space-y-6">
                <AlertCircle className="w-20 h-20 mx-auto text-red-500" />
                <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">404 - Page Not Found</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">Oops! The page you're looking for doesn't exist.</p>
                <Button asChild>
                    <Link to="/">
                        Return to Home
                    </Link>
                </Button>
            </div>
        </div>
    )
}