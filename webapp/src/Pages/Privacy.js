import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    titleContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 0)
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 4)
    }
}));

export default function Privacy() {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.titleContent}>
                <Container maxWidth="md">
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                        Privacy Policy
                    </Typography>
                </Container>
            </div>
            <div>
                <Container maxWidth="md">
                    <Typography varient="subtitle1" align="center" color="textPrimary" gutterBottom>
                        At ArdaCraft, accessible from <a href="https://ardacraft.me">https://ardacraft.me</a>, one of our main priorities is the privacy of
                        our visitors. This Privacy Policy document contains types of information that is collected and
                        recorded by ArdaCraft and how we use it.
                    </Typography>
                </Container>
                <Container maxWidth="md">
                    <Typography varient="subtitle1" align="center" color="textPrimary" gutterBottom>
                        If you have additional questions or require more information about our Privacy Policy, do not
                        hesitate to contact us.
                    </Typography>
                </Container>
            </div>

            <div className={classes.heroContent}>
                <Container maxWidth="md">

                    <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
                        General Data Protection Regulation (GDPR)
                    </Typography>
                </Container>
            </div>

            <div>
                <Container maxWidth="md">

                    <Typography varient="body1" align="left" color="textPrimary" gutterBottom>
                        We are a Data Controller of your information.
                    </Typography>

                    <Typography varient="body1" align="left" color="textPrimary" gutterBottom>
                        ArdaCraft legal basis for collecting and using the personal information described in this
                        Privacy
                        Policy depends on the Personal Information we collect and the specific context in which we
                        collect the information:
                    </Typography>
                    <ul>
                        <li>ArdaCraft needs to perform a contract with you</li>
                        <li>You have given ArdaCraft permission to do so</li>
                        <li>Processing your personal information is in ArdaCraft legitimate interests</li>
                        <li>ArdaCraft needs to comply with the law</li>
                    </ul>

                    <Typography varient="body1" align="left" color="textPrimary" gutterBottom>
                        ArdaCraft will retain your personal information only for as long as is necessary for the
                        purposes
                        set out in this Privacy Policy. We will retain and use your information to the extent necessary
                        to comply with our legal obligations, resolve disputes, and enforce our policies.
                    </Typography>

                    <Typography varient="body1" align="left" color="textPrimary" gutterBottom>
                        If you are a resident of the European Economic Area (EEA), you have certain data protection
                        rights. If you wish to be informed what Personal Information we hold about you and if you want
                        it to be removed from our systems, please contact us.
                    </Typography>
                    <Typography varient="body1" align="left" color="textPrimary" gutterBottom>
                        In certain circumstances, you have the following data protection rights:
                    </Typography>
                    <ul>
                        <li>The right to access, update or to delete the information we have on you.</li>
                        <li>The right of rectification.</li>
                        <li>The right to object.</li>
                        <li>The right of restriction.</li>
                        <li>The right to data portability</li>
                        <li>The right to withdraw consent</li>
                    </ul>

                </Container>
            </div>

            <div className={classes.heroContent}>
                <Container maxWidth="md">

                    <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
                        Log Files
                    </Typography>

                </Container>
            </div>

            <div>
                <Container maxWidth="md">

                    <Typography varient="body1" align="left" color="textPrimary" gutterBottom>
                        ArdaCraft follows a standard procedure of using log files. These files log visitors when they
                        visit websites. All hosting companies do this and a part of hosting services' analytics. The
                        information collected by log files include internet protocol (IP) addresses, browser type,
                        Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the
                        number of clicks. These are not linked to any information that is personally identifiable. The
                        purpose of the information is for analyzing trends, administering the site, tracking users'
                        movement on the website, and gathering demographic information.
                    </Typography>

                </Container>
            </div>

            <div className={classes.heroContent}>
                <Container maxWidth="md">

                    <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
                        Cookies and Web Beacons
                    </Typography>

                </Container>
            </div>

            <div>
                <Container maxWidth="md">

                    <Typography varient="body1" align="left" color="textPrimary" gutterBottom>
                        Like any other website, ArdaCraft uses 'cookies'. These cookies are used to store information
                        including visitors' preferences, and the pages on the website that the visitor accessed or
                        visited. The information is used to optimize the users' experience by customizing our web page
                        content based on visitors' browser type and/or other information.
                    </Typography>

                    <Typography varient="body1" align="left" color="textPrimary" gutterBottom>
                        For more general information on cookies, please read <a
                        href="https://www.cookieconsent.com/what-are-cookies/">"What Are Cookies"</a>.
                    </Typography>

                </Container>
            </div>

            <div className={classes.heroContent}>
                <Container maxWidth="md">

                    <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
                        Privacy Policies
                    </Typography>
                </Container>
            </div>

            <div>
                <Container maxWidth="md">

                    <Typography varient="body1" align="left" color="textPrimary" gutterBottom>
                        You may consult this list to find the Privacy Policy for each of the advertising partners of
                        ArdaCraft.
                    </Typography>

                    <Typography varient="body1" align="left" color="textPrimary" gutterBottom>
                        Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons
                        that are used in their respective advertisements and links that appear on ArdaCraft, which are
                        sent directly to users' browser. They automatically receive your IP address when this occurs.
                        These technologies are used to measure the effectiveness of their advertising campaigns and/or
                        to personalize the advertising content that you see on websites that you visit.
                    </Typography>

                    <Typography varient="body1" align="left" color="textPrimary" gutterBottom>
                        Note that ArdaCraft has no access to or control over these cookies that are used by third-party
                        advertisers.
                    </Typography>

                </Container>
            </div>

            <div className={classes.heroContent}>
                <Container maxWidth="md">

                    <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
                        Third Party Privacy Policies
                    </Typography>

                </Container>
            </div>

            <div>
                <Container maxWidth="md">

                    <Typography varient="body1" align="left" color="textPrimary" gutterBottom>
                        ArdaCraft's Privacy Policy does not apply to other advertisers or websites. Thus, we are
                        advising
                        you to consult the respective Privacy Policies of these third-party ad servers for more detailed
                        information. It may include their practices and instructions about how to opt-out of certain
                        options.
                    </Typography>

                    <Typography varient="body1" align="left" color="textPrimary" gutterBottom>
                        You can choose to disable cookies through your individual browser options. To know more detailed
                        information about cookie management with specific web browsers, it can be found at the browsers'
                        respective websites.
                    </Typography>

                </Container>
            </div>

            <div className={classes.heroContent}>
                <Container maxWidth="md">

                    <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
                        Children's Information
                    </Typography>

                </Container>
            </div>

            <div>
                <Container maxWidth="md">

                    <Typography varient="body1" align="left" color="textPrimary" gutterBottom>
                        Another part of our priority is adding protection for children while using the internet. We
                        encourage parents and guardians to observe, participate in, and/or monitor and guide their
                        online activity.
                    </Typography>

                    <Typography varient="body1" align="left" color="textPrimary" gutterBottom>
                        ArdaCraft does not knowingly collect any Personal Identifiable Information from children under
                        the age of 13. If you think that your child provided this kind of information on our website, we
                        strongly encourage you to contact us immediately and we will do our best efforts to promptly
                        remove such information from our records.
                    </Typography>

                </Container>
            </div>

            <div className={classes.heroContent}>
                <Container maxWidth="md">

                    <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
                        Online Privacy Policy Only
                    </Typography>

                </Container>
            </div>

            <div>
                <Container maxWidth="md">

                    <Typography varient="body1" align="left" color="textPrimary" gutterBottom>
                        Our Privacy Policy applies only to our online activities and is valid for visitors to our
                        website
                        with regards to the information that they shared and/or collect in ArdaCraft. This policy is not
                        applicable to any information collected offline or via channels other than this website.
                    </Typography>

                </Container>
            </div>

            <div className={classes.heroContent}>
                <Container maxWidth="md">

                    <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
                        Consent
                    </Typography>

                </Container>
            </div>

            <div>
                <Container maxWidth="md">

                    <Typography varient="body1" align="left" color="textPrimary" gutterBottom>
                        By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                    </Typography>

                </Container>
            </div>
        </div>
    );
}