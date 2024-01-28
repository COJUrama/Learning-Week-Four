class StatisticalAnalysis {
  constructor(data) {
    this.data = data;
  }

  // Measures of Central Tendency
  calculateMean() {
    const sum = this.data.reduce((total, item) => total + item, 0);
    return sum / this.data.length;
  }

  calculateMedian() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
      return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
    } else {
      return sortedData[middleIndex];
    }
  }

  calculateMode() {
    const frequencyMap = new Map();
    for (const value of this.data) {
      frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
    }

    let mode;
    let maxFrequency = 0;

    for (const [value, frequency] of frequencyMap.entries()) {
      if (frequency > maxFrequency) {
        mode = value;
        maxFrequency = frequency;
      }
    }

    return mode;
  }

  // Measures of Dispersion
  calculateRange() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    return sortedData[sortedData.length - 1] - sortedData[0];
  }

  calculateVariance() {
    const mean = this.calculateMean();
    const squaredDifferences = this.data.map((value) =>
      Math.pow(value - mean, 2)
    );
    return (
      squaredDifferences.reduce((acc, value) => acc + value, 0) /
      this.data.length
    );
  }

  calculateStandardDeviation() {
    return Math.sqrt(this.calculateVariance());
  }

  calculateInterquartileRange() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    const q1 = this.calculatePercentile(sortedData, 25);
    const q3 = this.calculatePercentile(sortedData, 75);
    return q3 - q1;
  }

  calculateCoefficientOfVariation() {
    const mean = this.calculateMean();
    const standardDeviation = this.calculateStandardDeviation();
    return (standardDeviation / mean) * 100;
  }

  calculatePercentile(sortedData, percentile) {
    const index = Math.ceil((percentile / 100) * sortedData.length);
    return sortedData[index - 1];
  }
}

const data = [12, 15, 17, 20, 22, 23, 25, 28, 30, 35];
const analysis = new StatisticalAnalysis(data);

console.log('Mean:', analysis.calculateMean());
console.log('Median:', analysis.calculateMedian());
console.log('Mode:', analysis.calculateMode());
console.log('Range:', analysis.calculateRange());
console.log('Variance:', analysis.calculateVariance());
console.log('Standard Deviation:', analysis.calculateStandardDeviation());
console.log('Interquartile Range:', analysis.calculateInterquartileRange());
console.log(
  'Coefficient of Variation:',
  analysis.calculateCoefficientOfVariation()
);
