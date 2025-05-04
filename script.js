// Rating calculation functions
function getRating(score, thresholds, reverse = false) {
    if (reverse) {
        if (score > thresholds[0]) return 'Very Low';
        if (score > thresholds[1]) return 'Low';
        if (score > thresholds[2]) return 'Moderate';
        if (score > thresholds[3]) return 'High';
        return 'Very High';
    } else {
        if (score <= thresholds[0]) return 'Very Low';
        if (score <= thresholds[1]) return 'Low';
        if (score <= thresholds[2]) return 'Moderate';
        if (score <= thresholds[3]) return 'High';
        return 'Very High';
    }
}

// Technology Realm Calculations
function calculateResilience() {
    const affectedArea = parseFloat(document.getElementById('affected-area').value);
    const cityArea = parseFloat(document.getElementById('city-area').value);
    const score = 1 - (affectedArea / cityArea);
    document.getElementById('resilience-score').textContent = score.toFixed(2);
    const rating = getRating(score, [0.2, 0.4, 0.6, 0.8]);
    document.getElementById('resilience-rating').textContent = rating;
    document.getElementById('resilience-rating').setAttribute('data-rating', rating);
    calculateTechnologyRealm();
}

function calculateRobustInfrastructure() {
    const affectedPopulation = parseFloat(document.getElementById('affected-population').value);
    const totalPopulation = parseFloat(document.getElementById('total-population').value);
    const score = 1 - (affectedPopulation / totalPopulation);
    document.getElementById('failure-rate').textContent = score.toFixed(2);
    const rating = getRating(score, [0.2, 0.4, 0.6, 0.8]);
    document.getElementById('robust-infrastructure-rating').textContent = rating;
    document.getElementById('robust-infrastructure-rating').setAttribute('data-rating', rating);
    calculateTechnologyRealm();
}

function calculateIntegration() {
    const monitoredPiping = parseFloat(document.getElementById('monitored-piping').value);
    const totalPiping = parseFloat(document.getElementById('total-piping').value);
    const automatic_devices = parseFloat(document.getElementById('automatic-devices').value);
    const score = (monitoredPiping / automatic_devices) / totalPiping;
    document.getElementById('integration-score').textContent = score.toFixed(2);
    const rating = getRating(score, [0.2, 0.4, 0.6, 0.8]);
    document.getElementById('integration-rating').textContent = rating;
    document.getElementById('integration-rating').setAttribute('data-rating', rating);
    calculateTechnologyRealm();
}

function calculateDrainageNetwork() {
    const drainageArea = parseFloat(document.getElementById('drainage-area').value);
    const totalCityArea = parseFloat(document.getElementById('total-city-area').value);
    const score = drainageArea / totalCityArea;
    document.getElementById('drainage-index').textContent = score.toFixed(2);
    const rating = getRating(score, [0.2, 0.4, 0.6, 0.8]);
    document.getElementById('drainage-rating').textContent = rating;
    document.getElementById('drainage-rating').setAttribute('data-rating', rating);
    calculateTechnologyRealm();
}

function calculateRainfallHarvesting() {
    const harvestedWater = parseFloat(document.getElementById('harvested-water').value);
    const effectivePrecipitation = parseFloat(document.getElementById('effective-precipitation').value);
    const score = harvestedWater / effectivePrecipitation;
    document.getElementById('harvesting-index').textContent = score.toFixed(2);
    const rating = getRating(score, [0.15, 0.3, 0.45, 0.6]);
    document.getElementById('harvesting-rating').textContent = rating;
    document.getElementById('harvesting-rating').setAttribute('data-rating', rating);
    calculateTechnologyRealm();
}

function calculateRecycling() {
    const reusedWastewater = parseFloat(document.getElementById('reused-wastewater').value);
    const totalWaterSupply = parseFloat(document.getElementById('total-water-supply').value);
    const score = reusedWastewater / totalWaterSupply;
    document.getElementById('recycling-index').textContent = score.toFixed(2);
    const rating = getRating(score, [0.075, 0.15, 0.225, 0.3]);
    document.getElementById('recycling-rating').textContent = rating;
    document.getElementById('recycling-rating').setAttribute('data-rating', rating);
    calculateTechnologyRealm();
}

function calculateWaterImportRate() {
    const importedWater = parseFloat(document.getElementById('imported-water').value);
    const totalWaterSupply = parseFloat(document.getElementById('total-water-supply-wir').value);
    const score = importedWater / totalWaterSupply;
    document.getElementById('water-import-rate').textContent = score.toFixed(2);
    const rating = getRating(score, [0.2, 0.4, 0.6, 0.8]);
    document.getElementById('water-import-rating').textContent = rating;
    document.getElementById('water-import-rating').setAttribute('data-rating', rating);
    calculateTechnologyRealm();
}

function calculateDailyWaterAvailability() {
    const domesticConsumption = parseFloat(document.getElementById('domestic-consumption').value);
    const cityPopulation = parseFloat(document.getElementById('city-population').value);
    const F = parseFloat(document.getElementById('amount-water-required-to-supply').value);
    const score = domesticConsumption / (cityPopulation * F); 
    document.getElementById('water-availability').textContent = score.toFixed(2);
    const rating = getRating(score, [0.9, 0.8, 0.7, 0.6], true); // Reverse scale
    document.getElementById('water-availability-rating').textContent = rating;
    document.getElementById('water-availability-rating').setAttribute('data-rating', rating);
    calculateTechnologyRealm();
}

function calculateWaterDistributionNetworks() {
    const waterLosses = parseFloat(document.getElementById('water-losses').value);
    const waterSupplied = parseFloat(document.getElementById('water-supplied').value);
    const score = waterLosses / waterSupplied;
    document.getElementById('leakage-percentage').textContent = score.toFixed(2);
    const rating = getRating(score, [0.075, 0.15, 0.225, 0.3]);
    document.getElementById('leakage-rating').textContent = rating;
    document.getElementById('leakage-rating').setAttribute('data-rating', rating);
    calculateTechnologyRealm();
}

function calculateSanitationFacility() {
    const populationWithSanitation = parseFloat(document.getElementById('population-with-sanitation').value);
    const totalPopulation = parseFloat(document.getElementById('total-population-sanitation').value);
    const score = populationWithSanitation / totalPopulation;
    document.getElementById('sanitation-state').textContent = score.toFixed(2);
    const rating = getRating(score, [0.2, 0.4, 0.6, 0.8]);
    document.getElementById('sanitation-rating').textContent = rating;
    document.getElementById('sanitation-rating').setAttribute('data-rating', rating);
    calculateTechnologyRealm();
}

function calculateWastewaterTreatment() {
    const treatedWastewater = parseFloat(document.getElementById('treated-wastewater').value);
    const totalWastewater = parseFloat(document.getElementById('total-wastewater').value);
    const score = treatedWastewater / totalWastewater;
    document.getElementById('treatment-capacity').textContent = score.toFixed(2);
    const rating = getRating(score, [0.2, 0.4, 0.6, 0.8]);
    document.getElementById('treatment-rating').textContent = rating;
    document.getElementById('treatment-rating').setAttribute('data-rating', rating);
    calculateTechnologyRealm();
}

// Environment Realm Calculations
function calculateAquaHealthIndex() {
    const weights = document.getElementById('water-body-weights').value.split(',').map(Number);
    const areas = document.getElementById('water-body-areas').value.split(',').map(Number);
    
    if (weights.length !== areas.length) {
        alert('Number of weights and areas must match');
        return;
    }
    
    const numerator = weights.reduce((sum, weight, index) => sum + (weight * areas[index]), 0);
    const denominator = areas.reduce((sum, area) => sum + area, 0);
    const score = numerator / denominator;
    
    document.getElementById('aqua-health-index').textContent = score.toFixed(2);
    const rating = getRating(score, [0.2, 0.4, 0.6, 0.8]);
    document.getElementById('aqua-health-rating').textContent = rating;
    document.getElementById('aqua-health-rating').setAttribute('data-rating', rating);
    calculateEnvironmentRealm();
}

function calculateGreenBlueSpaces() {
    const greenBlueArea = parseFloat(document.getElementById('green-blue-area').value);
    const cityArea = parseFloat(document.getElementById('environment-city-area').value);
    const score = greenBlueArea / cityArea;
    document.getElementById('green-blue-ratio').textContent = score.toFixed(2);
    const rating = getRating(score, [0.1, 0.2, 0.3, 0.4]);
    document.getElementById('green-blue-rating').textContent = rating;
    document.getElementById('green-blue-rating').setAttribute('data-rating', rating);
    calculateEnvironmentRealm();
}

function calculateWaterCircularity() {
    const reusedWastewater = parseFloat(document.getElementById('reused-wastewater-env').value);
    const harvestedRainwater = parseFloat(document.getElementById('harvested-rainwater').value);
    const generatedWastewater = parseFloat(document.getElementById('generated-wastewater').value);
    const totalRainfall = parseFloat(document.getElementById('total-rainfall').value);
    
    const numerator = reusedWastewater + harvestedRainwater;
    const denominator = generatedWastewater + totalRainfall;
    const score = numerator / denominator;
    
    document.getElementById('water-circularity').textContent = score.toFixed(2);
    const rating = getRating(score, [0.2, 0.4, 0.6, 0.8]);
    document.getElementById('water-circularity-rating').textContent = rating;
    document.getElementById('water-circularity-rating').setAttribute('data-rating', rating);
    calculateEnvironmentRealm();
}

// Society Realm Calculations
function calculateAwareness() {
    const literacyRate = parseFloat(document.getElementById('literacy-rate').value) || 0;
    const score = literacyRate / 100;
    const rating = getRating(score, [0.2, 0.4, 0.6, 0.8]);
    document.getElementById('literacy-score').textContent = score.toFixed(2);
    document.getElementById('literacy-rating').textContent = rating;
    document.getElementById('literacy-rating').setAttribute('data-rating', rating);
    calculateSocietyRealm();
    return getRatingValue(rating);
}

function calculateSocialVulnerability() {
    const preparedPopulation = parseFloat(document.getElementById('prepared-population').value) || 0;
    const totalAffectedPopulation = parseFloat(document.getElementById('total-affected-population').value) || 0;
    const score = preparedPopulation / totalAffectedPopulation;
    const rating = getRating(score, [0.2, 0.4, 0.6, 0.8]);
    document.getElementById('vulnerability-index').textContent = score.toFixed(2);
    document.getElementById('vulnerability-rating').textContent = rating;
    document.getElementById('vulnerability-rating').setAttribute('data-rating', rating);
    calculateSocietyRealm();
    return getRatingValue(rating);
}

function calculateCommunitySatisfaction() {
    const resolvedComplaints = parseFloat(document.getElementById('resolved-complaints').value) || 0;
    const totalComplaints = parseFloat(document.getElementById('total-complaints').value) || 0;
    const score = resolvedComplaints / totalComplaints;
    const rating = getRating(score, [0.2, 0.4, 0.6, 0.8]);
    document.getElementById('satisfaction-score').textContent = score.toFixed(2);
    document.getElementById('satisfaction-rating').textContent = rating;
    document.getElementById('satisfaction-rating').setAttribute('data-rating', rating);
    calculateSocietyRealm();
    return getRatingValue(rating);
}

function calculateAccessToSafeWater() {
    const safeWaterAccess = parseFloat(document.getElementById('safe-water-access').value) || 0;
    const score = safeWaterAccess / 100;
    const rating = getRating(score, [0.2, 0.4, 0.6, 0.8]);
    document.getElementById('accessibility-index').textContent = score.toFixed(2);
    document.getElementById('accessibility-rating').textContent = rating;
    document.getElementById('accessibility-rating').setAttribute('data-rating', rating);
    calculateSocietyRealm();
    return getRatingValue(rating);
}

// Helper function to get rating based on score
function getRating(score, thresholds) {
    if (score <= thresholds[0]) return 'Very Low';
    if (score <= thresholds[1]) return 'Low';
    if (score <= thresholds[2]) return 'Moderate';
    if (score <= thresholds[3]) return 'High';
    return 'Very High';
}

// Helper function to convert rating to value
function getRatingValue(rating) {
    switch(rating) {
        case 'Very Low': return 1;
        case 'Low': return 2;
        case 'Moderate': return 3;
        case 'High': return 4;
        case 'Very High': return 5;
        default: return 0;
    }
}

// Governance Realm Calculations
function calculateGovernanceIndicator(selectId, scoreId) {
    const value = document.getElementById(selectId).value;
    const score = value === 'yes' ? 1 : 0;
    document.getElementById(scoreId).textContent = score;
    return score;
}

function calculateGovernanceRealm() {
    // Calculate scores for each indicator
    const alertSystemScore = calculateGovernanceIndicator('alert-system', 'alert-system-score');
    const coordinationScore = calculateGovernanceIndicator('coordination', 'coordination-score');
    
    // Citizen Engagement (average of two questions)
    const citizenPoliciesScore = document.getElementById('citizen-policies').value === 'yes' ? 1 : 0;
    const citizenParticipationScore = document.getElementById('citizen-participation').value === 'yes' ? 1 : 0;
    const citizenEngagementScore = (citizenPoliciesScore + citizenParticipationScore) / 2;
    document.getElementById('citizen-engagement-score').textContent = citizenEngagementScore.toFixed(2);
    
    // Mediation Platforms (average of two questions)
    const conflictMechanismsScore = document.getElementById('conflict-mechanisms').value === 'yes' ? 1 : 0;
    const collaborativeSolutionsScore = document.getElementById('collaborative-solutions').value === 'yes' ? 1 : 0;
    const mediationScore = (conflictMechanismsScore + collaborativeSolutionsScore) / 2;
    document.getElementById('mediation-score').textContent = mediationScore.toFixed(2);
    
    // Subsidies (average of two questions)
    const waterSubsidiesScore = document.getElementById('water-subsidies').value === 'yes' ? 1 : 0;
    const researchFundingScore = document.getElementById('research-funding').value === 'yes' ? 1 : 0;
    const subsidiesScore = (waterSubsidiesScore + researchFundingScore) / 2;
    document.getElementById('subsidies-score').textContent = subsidiesScore.toFixed(2);
    
    const connectionScore = calculateGovernanceIndicator('water-workshops', 'connection-score');
    
    // Adequate Maintenance (average of four questions)
    const maintenanceFundingScore = document.getElementById('maintenance-funding').value === 'yes' ? 1 : 0;
    const longTermPlanningScore = document.getElementById('long-term-planning').value === 'yes' ? 1 : 0;
    const maintenanceGuidelinesScore = document.getElementById('maintenance-guidelines').value === 'yes' ? 1 : 0;
    const assetDatabasesScore = document.getElementById('asset-databases').value === 'yes' ? 1 : 0;
    const maintenanceScore = (maintenanceFundingScore + longTermPlanningScore + maintenanceGuidelinesScore + assetDatabasesScore) / 4;
    document.getElementById('maintenance-score').textContent = maintenanceScore.toFixed(2);
    
    // NGOs and SHGs (average of two questions)
    const ngosShgsScore = document.getElementById('ngos-shgs').value === 'yes' ? 1 : 0;
    const ngoCollaborationScore = document.getElementById('ngo-collaboration').value === 'yes' ? 1 : 0;
    const ngoScore = (ngosShgsScore + ngoCollaborationScore) / 2;
    document.getElementById('ngo-score').textContent = ngoScore.toFixed(2);
    
    // Calculate overall Governance Realm score
    const totalScore = (alertSystemScore + coordinationScore + citizenEngagementScore + 
                       mediationScore + subsidiesScore + connectionScore + 
                       maintenanceScore + ngoScore) / 8;
    document.getElementById('governance-realm-score').textContent = totalScore.toFixed(2);
    calculateWaterSensitivityLevel();
}

// Realm Score Calculations
function calculateTechnologyRealm() {
    const scores = [
        parseFloat(document.getElementById('resilience-score').textContent),
        parseFloat(document.getElementById('failure-rate').textContent),
        parseFloat(document.getElementById('integration-score').textContent),
        parseFloat(document.getElementById('drainage-index').textContent),
        parseFloat(document.getElementById('harvesting-index').textContent),
        parseFloat(document.getElementById('recycling-index').textContent),
        parseFloat(document.getElementById('water-import-rate').textContent),
        parseFloat(document.getElementById('water-availability').textContent),
        parseFloat(document.getElementById('leakage-percentage').textContent),
        parseFloat(document.getElementById('sanitation-state').textContent),
        parseFloat(document.getElementById('treatment-capacity').textContent)
    ].filter(score => !isNaN(score));
    
    if (scores.length > 0) {
        const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
        document.getElementById('technology-realm-score').textContent = average.toFixed(2);
    }
    calculateWaterSensitivityLevel();
}

function calculateEnvironmentRealm() {
    const scores = [
        parseFloat(document.getElementById('aqua-health-index').textContent),
        parseFloat(document.getElementById('green-blue-ratio').textContent),
        parseFloat(document.getElementById('water-circularity').textContent)
    ].filter(score => !isNaN(score));
    
    if (scores.length > 0) {
        const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
        document.getElementById('environment-realm-score').textContent = average.toFixed(2);
    }
    calculateWaterSensitivityLevel();
}

function calculateSocietyRealm() {
    const scores = [
        parseFloat(document.getElementById('literacy-score').textContent),
        parseFloat(document.getElementById('vulnerability-index').textContent),
        parseFloat(document.getElementById('satisfaction-score').textContent),
        parseFloat(document.getElementById('accessibility-index').textContent)
    ].filter(score => !isNaN(score));
    
    if (scores.length > 0) {
        const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
        document.getElementById('society-realm-score').textContent = average.toFixed(2);
    }
    calculateWaterSensitivityLevel();
}

// Function to calculate water sensitivity level
function calculateWaterSensitivityLevel() {
    const techScore = parseFloat(document.getElementById('technology-realm-score').textContent) || 0;
    const envScore = parseFloat(document.getElementById('environment-realm-score').textContent) || 0;
    const societyScore = parseFloat(document.getElementById('society-realm-score').textContent) || 0;
    const governanceScore = parseFloat(document.getElementById('governance-realm-score').textContent) || 0;

    // Get the minimum score among Technology, Environment, and Society realms
    const minRealmScore = Math.min(techScore, envScore, societyScore);

    let sensitivityLevel;
    
    if (minRealmScore <= 1.5 && governanceScore < 0.2) {
        sensitivityLevel = "Very Low Water-Sensitivity";
    } else if (minRealmScore > 1.5 && minRealmScore <= 2.5 && governanceScore >= 0.2 && governanceScore <= 0.4) {
        sensitivityLevel = "Low Water-Sensitivity";
    } else if (minRealmScore > 2.5 && minRealmScore <= 3.5 && governanceScore > 0.4 && governanceScore <= 0.6) {
        sensitivityLevel = "Moderate Water-Sensitivity";
    } else if (minRealmScore > 3.5 && minRealmScore <= 4.5 && governanceScore > 0.6 && governanceScore <= 0.8) {
        sensitivityLevel = "High Water-Sensitivity";
    } else if (minRealmScore > 4.5 && governanceScore > 0.8) {
        sensitivityLevel = "Excellent Water-Sensitivity";
    } else {
        // If the scores don't match any specific range, show the current state
        sensitivityLevel = "Calculating...";
    }

    document.getElementById('water-sensitivity-level').textContent = sensitivityLevel;
}

// Event Listeners
document.getElementById('affected-area').addEventListener('input', calculateResilience);
document.getElementById('city-area').addEventListener('input', calculateResilience);
document.getElementById('affected-population').addEventListener('input', calculateRobustInfrastructure);
document.getElementById('total-population').addEventListener('input', calculateRobustInfrastructure);
document.getElementById('monitored-piping').addEventListener('input', calculateIntegration);
document.getElementById('total-piping').addEventListener('input', calculateIntegration);
document.getElementById('automatic-devices').addEventListener('input', calculateIntegration);
document.getElementById('drainage-area').addEventListener('input', calculateDrainageNetwork);
document.getElementById('total-city-area').addEventListener('input', calculateDrainageNetwork);
document.getElementById('harvested-water').addEventListener('input', calculateRainfallHarvesting);
document.getElementById('effective-precipitation').addEventListener('input', calculateRainfallHarvesting);
document.getElementById('reused-wastewater').addEventListener('input', calculateRecycling);
document.getElementById('total-water-supply').addEventListener('input', calculateRecycling);
document.getElementById('imported-water').addEventListener('input', calculateWaterImportRate);
document.getElementById('total-water-supply-wir').addEventListener('input', calculateWaterImportRate);
document.getElementById('domestic-consumption').addEventListener('input', calculateDailyWaterAvailability);
document.getElementById('amount-water-required-to-supply').addEventListener('input', calculateDailyWaterAvailability);
document.getElementById('city-population').addEventListener('input', calculateDailyWaterAvailability);
document.getElementById('water-losses').addEventListener('input', calculateWaterDistributionNetworks);
document.getElementById('water-supplied').addEventListener('input', calculateWaterDistributionNetworks);
document.getElementById('population-with-sanitation').addEventListener('input', calculateSanitationFacility);
document.getElementById('total-population-sanitation').addEventListener('input', calculateSanitationFacility);
document.getElementById('treated-wastewater').addEventListener('input', calculateWastewaterTreatment);
document.getElementById('total-wastewater').addEventListener('input', calculateWastewaterTreatment);

document.getElementById('water-body-weights').addEventListener('input', calculateAquaHealthIndex);
document.getElementById('water-body-areas').addEventListener('input', calculateAquaHealthIndex);
document.getElementById('green-blue-area').addEventListener('input', calculateGreenBlueSpaces);
document.getElementById('environment-city-area').addEventListener('input', calculateGreenBlueSpaces);
document.getElementById('reused-wastewater-env').addEventListener('input', calculateWaterCircularity);
document.getElementById('harvested-rainwater').addEventListener('input', calculateWaterCircularity);
document.getElementById('generated-wastewater').addEventListener('input', calculateWaterCircularity);
document.getElementById('total-rainfall').addEventListener('input', calculateWaterCircularity);

document.getElementById('literacy-rate').addEventListener('input', calculateAwareness);
document.getElementById('prepared-population').addEventListener('input', calculateSocialVulnerability);
document.getElementById('total-affected-population').addEventListener('input', calculateSocialVulnerability);
document.getElementById('resolved-complaints').addEventListener('input', calculateCommunitySatisfaction);
document.getElementById('total-complaints').addEventListener('input', calculateCommunitySatisfaction);
document.getElementById('safe-water-access').addEventListener('input', calculateAccessToSafeWater);

document.getElementById('alert-system').addEventListener('change', calculateGovernanceRealm);
document.getElementById('coordination').addEventListener('change', calculateGovernanceRealm);
document.getElementById('citizen-policies').addEventListener('change', calculateGovernanceRealm);
document.getElementById('citizen-participation').addEventListener('change', calculateGovernanceRealm);
document.getElementById('conflict-mechanisms').addEventListener('change', calculateGovernanceRealm);
document.getElementById('collaborative-solutions').addEventListener('change', calculateGovernanceRealm);
document.getElementById('water-subsidies').addEventListener('change', calculateGovernanceRealm);
document.getElementById('research-funding').addEventListener('change', calculateGovernanceRealm);
document.getElementById('water-workshops').addEventListener('change', calculateGovernanceRealm);
document.getElementById('maintenance-funding').addEventListener('change', calculateGovernanceRealm);
document.getElementById('long-term-planning').addEventListener('change', calculateGovernanceRealm);
document.getElementById('maintenance-guidelines').addEventListener('change', calculateGovernanceRealm);
document.getElementById('asset-databases').addEventListener('change', calculateGovernanceRealm);
document.getElementById('ngos-shgs').addEventListener('change', calculateGovernanceRealm);
document.getElementById('ngo-collaboration').addEventListener('change', calculateGovernanceRealm); 