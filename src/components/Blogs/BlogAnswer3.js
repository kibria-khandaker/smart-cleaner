import React from 'react';
import fireBaseServicesImg from '../../img/firebaseService.jpg';

const BlogAnswer3 = () => {
    return (
        <div>
            <h5 className=' text-success'>Answer:</h5>
            
            <p><b className=' text-secondary'>There are  Firebase Services List other than Authentication:</b></p>
            <p>
                Cloud Firestore, +
                Machine Learning, +
                Cloud Functions,   +
                Hosting,+
                Cloud Storage,+
                Realtime Database,+
                Crashlytics,+
                Performance Monitoring,+
                Test Lab,+
                App Distribution,+
                Google Analytics,+
                In-App Messaging,+
                A/B Testing,+
                Cloud Messaging,+
                Remote Config,+
                Dynamic Links,
            </p>
            <img className='w-100' src={fireBaseServicesImg} alt="FirebaseServices" />
        </div>
    );
};

export default BlogAnswer3;