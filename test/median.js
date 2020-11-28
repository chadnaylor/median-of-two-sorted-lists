let median = require('../median')
let assert = require('assert')

describe('Median', function () {
    describe('#findMedianSortedArrays()', function () {
        it('should correctly find median of two sorted arrays of different length', function () {
            let nums1 = [1, 3], nums2 = [2]
            assert.strictEqual(2, median.findMedianSortedArrays(nums1, nums2))

            nums1 = [2, 3], nums2 = [1]
            assert.strictEqual(2, median.findMedianSortedArrays(nums1, nums2))

            nums1 = [1], nums2 = [2, 3, 4, 5]
            assert.strictEqual(3, median.findMedianSortedArrays(nums1, nums2))

            nums1 = [4], nums2 = [1, 2, 3, 5]
            assert.strictEqual(3, median.findMedianSortedArrays(nums1, nums2))

            nums1 = [5], nums2 = [1, 2, 3, 4]
            assert.strictEqual(3, median.findMedianSortedArrays(nums1, nums2))

            nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], nums2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] //i=3, j=0
            assert.strictEqual(11, median.findMedianSortedArrays(nums1, nums2))

            nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], nums2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21] //i=3, j=0
            assert.strictEqual(11, median.findMedianSortedArrays(nums1, nums2))


            nums1 = [1, 3, 4, 5, 6], nums2 = [2, 7] //i=2, j=1
            assert.strictEqual(4, median.findMedianSortedArrays(nums1, nums2))

            nums2 = [1, 3, 4, 5, 6], nums1 = [2, 7] //i=2, j=1
            assert.strictEqual(4, median.findMedianSortedArrays(nums1, nums2))

        })
        it('should correctly find median of two sorted arrays of same length', function () {
            let nums1 = [1, 2], nums2 = [3, 4]
            assert.strictEqual(2.5, median.findMedianSortedArrays(nums1, nums2))

            nums1 = [1, 2, 3], nums2 = [3, 4, 9]
            assert.strictEqual(3, median.findMedianSortedArrays(nums1, nums2))

            nums1 = [3, 4, 9], nums2 = [1, 2, 3]
            assert.strictEqual(3, median.findMedianSortedArrays(nums1, nums2))


            nums1 = [1], nums2 = [3, 4, 9]
            assert.strictEqual(3.5, median.findMedianSortedArrays(nums1, nums2))

            nums1 = [3, 4, 9], nums2 = [1]
            assert.strictEqual(3.5, median.findMedianSortedArrays(nums1, nums2))

            nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], nums2 = [12, 13, 14, 15, 16, 17, 18, 19, 20] //i=3, j=0
            assert.strictEqual(10.5, median.findMedianSortedArrays(nums1, nums2))
        })
        it('should correctly find median of two sorted arrays of zeros', function () {
            let nums1 = [0, 0], nums2 = [0, 0]
            assert.strictEqual(0, median.findMedianSortedArrays(nums1, nums2))

            nums1 = [0, 0], nums2 = [0, 0, 0]
            assert.strictEqual(0, median.findMedianSortedArrays(nums1, nums2))
        })

        it('should correctly find median of one empty and one sorted array', function () {
            let nums1 = [], nums2 = [1]
            assert.strictEqual(1, median.findMedianSortedArrays(nums1, nums2))

            nums1 = [2], nums2 = []
            assert.strictEqual(2, median.findMedianSortedArrays(nums1, nums2))

            nums1 = [2, 3], nums2 = []
            assert.strictEqual(2.5, median.findMedianSortedArrays(nums1, nums2))

        })
    })

})